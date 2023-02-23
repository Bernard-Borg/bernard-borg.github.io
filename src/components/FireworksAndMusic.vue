<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import { ref, watch } from "vue";
import nggyu from "@/assets/sounds/nggyu.mp3";
import { useSound } from "@vueuse/sound";

const enableFireworks = ref<boolean>(false);
const gameStore = useGameStore();

const { play, stop } = useSound(nggyu, { volume: 0.4 });

const startEverything = () => {
    play();
    enableFireworks.value = true;
};

const stopEverything = () => {
    stop();
    enableFireworks.value = false;
};

const stopFinaleAnimation = () => {
    gameStore.resetGame();
};

watch(
    () => gameStore.animatingFinale,
    (newValue) => {
        if (newValue) {
            startEverything();
        } else {
            stopEverything();
        }
    }
);
</script>

<template>
    <div
        class="fixed w-full h-full top-0 left-0 flex justify-center items-center z-[100] fireworks"
        v-if="enableFireworks"
        @click="stopFinaleAnimation"
    >
        <div class="firework absolute" v-for="(firework, i) in 6" :id="`firework${i}`" :key="i">
            <div
                v-for="(explosion, j) in 12"
                :key="j"
                class="explosion absolute -left-[2px] bottom-0 w-[4px] h-[80px]"
            ></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// Effect adapted from https://www.youtube.com/watch?v=K4K7HNavK4U

@mixin random-light-color() {
    background: rgb(random(128) + 128, random(128) + 128, 0);
}

.fireworks {
    background-color: rgba(128, 128, 128, 0.5);
}

@for $i from 0 through 6 {
    #firework#{$i} {
        left: random(70) + 10%;
        top: random(70) + 10%;
        transform: rotate($i * 30deg) translateY(-15px);

        .explosion::before {
            animation: explosion random(2) + 1s random(1) + 1s ease-in-out infinite;
            @include random-light-color();
        }
    }
}

.explosion {
    transform-origin: 50% 100%;
    overflow: hidden;

    @for $i from 0 through 12 {
        &:nth-child(#{$i}) {
            transform: rotate($i * 30deg) translateY(-15px);
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        height: 40px;
        @include random-light-color();
    }
}

@keyframes explosion {
    0% {
        top: 100%;
    }

    33%,
    100% {
        top: -50%;
    }
}
</style>
