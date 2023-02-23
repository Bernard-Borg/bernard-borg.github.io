<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import { useTimeoutFn } from "@vueuse/shared";
import { ref, watch } from "vue";

const gameStore = useGameStore();
const showGameResetAnimation = ref<boolean>(false);

watch(
    () => gameStore.resettingGame,
    (newValue) => {
        if (newValue) {
            showGameResetAnimation.value = true;

            useTimeoutFn(() => {
                showGameResetAnimation.value = false;
            }, 10000);
        }
    }
);
</script>

<template>
    <div
        v-if="showGameResetAnimation"
        class="absolute aspect-square rounded-full z-[100] bg-transparent game-reset"
    ></div>
</template>

<style lang="scss">
$animation-duration: 1.5s;

.game-reset {
    box-shadow: 0px 0px 0px 50000px rgba(0, 0, 0, 1);
    animation: $animation-duration ease-out 0s 1 normal forwards game-reset,
        3s ease-out $animation-duration + 1s 1 normal forwards fade-box-shadow;
}

@keyframes game-reset {
    0% {
        width: 200vw;
    }

    100% {
        width: 100%;
    }
}

@keyframes fade-box-shadow {
    100% {
        box-shadow: 0px 0px 0px 50000px rgba(0, 0, 0, 0);
    }
}
</style>
