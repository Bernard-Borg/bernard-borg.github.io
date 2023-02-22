<script setup lang="ts">
import { useTimeoutFn } from "@vueuse/shared";
import { ref, watch } from "vue";
import { useSound } from "@vueuse/sound";
import achievementSfx from "@/assets/sounds/achievement.mp3";
import { useGameStore } from "@/stores/game";

const { play: playAchievement } = useSound(achievementSfx, { volume: 1 });

const gameStore = useGameStore();
const achievement = ref();

const show = () => {
    showing.value = true;

    playAchievement();

    useTimeoutFn(() => {
        achievement.value.classList.add("animate__animated", "animate__fadeOut");
    }, 2000);

    useTimeoutFn(() => {
        showing.value = false;
    }, 3000);
};

const showing = ref<boolean>(false);

watch(
    () => gameStore.lastAchievement,
    (newValue) => {
        if (newValue) {
            show();
        }
    }
);
</script>

<template>
    <div
        v-if="showing"
        ref="achievement"
        class="flex absolute left-1/2 -translate-x-1/2 items-center m-3 achievement-container rounded-full max-w-max"
    >
        <span
            class="rounded-full flex justify-center items-center -mr-11 z-10 aspect-square w-[65px] text-black text-2xl"
            ><i class="fa-solid fa-trophy"></i
        ></span>

        <div
            class="rounded-full text-white flex whitespace-nowrap items-center h-14 max-w-max achievement overflow-hidden outline outline-1-white"
        >
            <div class="flex flex-col ml-16 mr-10">
                <span class="font-bold">Achievement Unlocked</span>
                <span>Easter Egg {{ gameStore.getEasterEggIndex(gameStore.lastAchievement ?? "charles") }}</span>
            </div>
        </div>
    </div>
</template>

<style>
.achievement {
    background: #2f2523;
    animation: 1.75s biggen forwards;
}

.achievement-container > span {
    background: #9ec626;
}

@keyframes biggen {
    0% {
        width: 0px;
    }

    80% {
        width: 100%;
    }
}
</style>
