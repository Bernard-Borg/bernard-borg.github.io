<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import { useTimeoutFn } from "@vueuse/core";
import { ref, watch } from "vue";

const gameStore = useGameStore();
const easterEggsFirstTime = ref<boolean>(false);
const eeModeEnabledText = ref<HTMLSpanElement>();
const eeModeEnabledContainer = ref<HTMLDivElement>();

const activate = () => {
    easterEggsFirstTime.value = true;

    useTimeoutFn(() => {
        eeModeEnabledContainer.value?.classList.add("animate__animated", "animate__fadeOut");
    }, 3000);

    useTimeoutFn(() => {
        easterEggsFirstTime.value = false;
    }, 4000);
};

watch(
    () => gameStore.easterEggFirstTime,
    (newValue) => {
        if (newValue === true) {
            activate();
        }
    }
);

defineExpose({ activate });
</script>

<template>
    <div
        v-if="easterEggsFirstTime"
        class="fixed w-full h-full bg-black/80 z-10 flex justify-center items-center"
        ref="eeModeEnabledContainer"
    >
        <span class="text-8xl top-1/2 arcade-classic change-color" ref="eeModeEnabledText">
            EASTER EGG MODE ENABLED
        </span>
    </div>
</template>

<style>
@font-face {
    font-family: ArcadeClassic;
    src: url("./assets/fonts/arcade_classic.ttf");
}

.arcade-classic {
    font-family: "ArcadeClassic";
}

.change-color {
    animation: 0.6s zoomIn, 0.6s linear change-color infinite;
}

@keyframes change-color {
    0% {
        color: darkred;
    }

    50% {
        color: darkorange;
    }

    100% {
        color: darkred;
    }
}
</style>
