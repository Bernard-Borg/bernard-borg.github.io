<script setup lang="ts">
import AchievementGet from "@/components/AchievementGet.vue";
import { useLocalStorage } from "@vueuse/core";
import { useIntervalFn, useTimeoutFn } from "@vueuse/shared";
import { computed, PropType, ref, watch } from "vue";

const pupils = ref<HTMLElement[]>();
const peeper = ref<HTMLElement>();
const interval = ref<number>(8000);

const easterEggState = useLocalStorage("nggyu-store", {
    enabled: false,
    bertu: false,
    grixu: false,
    dre: false,
    charles: false
});

const props = defineProps({
    animate: { type: Boolean, default: false },
    easterEgg: { type: String as PropType<"bertu" | "grixu" | "dre" | "charles">, required: true }
});

const { pause, resume } = useIntervalFn(
    () => {
        interval.value = Math.floor(Math.random() * (16000 - 8000 + 1) + 8000);
        peeper.value?.classList.add("animate-peeper");

        pupils.value?.forEach((pupil) => {
            pupil.classList.add("animate-pupils");
        });

        useTimeoutFn(() => {
            peeper.value?.classList.remove("animate-peeper");

            pupils.value?.forEach((pupil) => {
                pupil.classList.remove("animate-pupils");
            });
        }, 3000);
    },
    interval,
    { immediate: false }
);

const startAnimating = () => {
    if (!easterEggState.value[props.easterEgg]) {
        interval.value = 8000;
        resume();
    }
};

const stopAnimating = () => {
    pause();

    peeper.value?.classList.remove("animate-peeper");

    pupils.value?.forEach((pupil) => {
        pupil.classList.remove("animate-pupils");
    });
};

const peeperClicked = () => {
    easterEggState.value[props.easterEgg] = true;
    stopAnimating();
    emit("clicked");
};

watch(
    () => props.animate,
    (newValue) => {
        if (newValue) {
            startAnimating();
        } else {
            stopAnimating();
        }
    }
);

const emit = defineEmits(["clicked"]);
</script>

<template>
    <div id="peeper" class="cursor-pointer pointer-events-auto" ref="peeper" @click="peeperClicked">
        <div v-for="(eye, i) in 2" class="eye">
            <div class="eye-pupil" ref="pupils"></div>
        </div>
    </div>
</template>

<style>
#peeper {
    background: black;
    width: 30px;
    height: 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.animate-peeper {
    animation: 2s peek ease-in-out 1;
}

.eye {
    background: white;
    width: 10px;
    height: 5px;
    border-radius: 2px;
    display: flex;
    align-items: center;
}

.animate-pupils {
    animation: 2s look-around ease-in-out 1;
    animation-delay: 1s;
}

.eye-pupil {
    background: black;
    width: 3px;
    height: 3px;
    border-radius: 3px;
}

@keyframes look-around {
    25%,
    90% {
        margin-left: 80%;
    }

    35%,
    100% {
        margin-left: 0;
    }
}

@keyframes peek {
    60%,
    80% {
        transform: translate(-50%, 0%);
    }

    100% {
        transform: translate(-50%, 100%);
    }
}
</style>
