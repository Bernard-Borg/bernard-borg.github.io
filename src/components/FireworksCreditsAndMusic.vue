<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import { ref, watch } from "vue";
import nggyu from "@/assets/sounds/nggyu.mp3";
import { useSound } from "@vueuse/sound";

const enableFireworks = ref<boolean>(false);
const gameStore = useGameStore();

const { play, stop } = useSound(nggyu, { volume: 0.4 });

const credits = ref<HTMLDivElement>();

const startEverything = () => {
    play();
    enableFireworks.value = true;
};

const stopEverything = () => {
    stop();
    enableFireworks.value = false;
};

const stopFinaleAnimation = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains("fireworks")) {
        gameStore.resetGame();
    }
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
        class="fixed w-full h-full top-0 left-0 flex z-[100] fireworks justify-center"
        v-if="enableFireworks"
        @click="stopFinaleAnimation"
    >
        <div id="left-fireworks" class="w-1/4">
            <div class="firework relative" v-for="(firework, i) in 3" :id="`firework${i}`" :key="i">
                <div
                    v-for="(explosion, j) in 12"
                    :key="j"
                    class="explosion absolute -left-[2px] bottom-0 w-[4px] h-[80px]"
                ></div>
            </div>
        </div>
        <div
            ref="credits"
            class="h-full animate-credits w-1/2 text-lg flex-col items-center text-center hidden md:flex"
        >
            <span class="text-2xl font-bold mb-10">CREDITS</span>
            <div class="grid grid-cols-2 text-left font-thin gap-x-3">
                <span class="block text-right font-semibold">Implementation</span>Me
                <span class="block text-right font-semibold">Design</span>Me
                <span class="block text-right font-semibold">Sound effects</span>
                <div class="flex flex-col">
                    <span>
                        Achievement SFX from
                        <a href="https://www.youtube.com/watch?v=HkExBV05_EY" target="_blank">[Link]</a>
                    </span>
                    <span>
                        Hit SFX adapted from "There is no game"<a
                            href="https://www.crazygames.com/game/there-is-no-game"
                            target="_blank"
                        >
                            [Link]
                        </a>
                    </span>
                    <span
                        >Win SFX from
                        <a href="https://www.youtube.com/watch?v=rr5CMS2GtCY" target="_blank">[Link]</a></span
                    >
                </div>
                <span class="block text-right font-semibold">Credits music</span>
                <span>
                    LittleTranscriber
                    <a href="https://www.youtube.com/watch?v=4w2icYjruEY" target="_blank">[Link]</a></span
                >
                <span class="block text-right font-semibold">Combination lock</span>
                <span>
                    Adapted from @MacEvelly
                    <a href="https://codepen.io/MacEvelly/pen/gpGZGZ" target="_blank">[Link]</a></span
                >
                <span class="block text-right font-semibold">Fireworks</span>
                <span
                    >Adapted from MinzCode
                    <a href="https://www.youtube.com/watch?v=K4K7HNavK4U" target="_blank">[Link]</a></span
                >
                <span class="block text-right font-semibold">Riddle</span>
                <span
                    >Generated with aid from ChatGPT
                    <a href="https://chat.openai.com/chat" target="_blank">[Link]</a></span
                >
                <span class="block text-right font-semibold">Libraries used</span>
                <div class="flex flex-col">
                    <span>TailwindCSS (CSS Utility Classes)</span>
                    <span>Vue 3 (Front-end framework)</span>
                    <span>Vite (Tooling)</span>
                    <span>Typescript (Dev Experience)</span>
                    <span>Pinia (State management)</span>
                    <span>Animate.css (Animations)</span>
                    <span>VueUse (+ vueuse/sound for composable utilities)</span>
                    <span>FontAwesome 6 (icons)</span>
                    <span>moment (Date formatting)</span>
                    <span>lodash-es (Utility methods)</span>
                    <span>vue-pdf-embed (Pdf Viewer)</span>
                </div>
            </div>
        </div>
        <div id="right-fireworks" class="w-1/4">
            <div class="firework relative" v-for="(firework, i) in 3" :id="`firework${i + 3}`" :key="i + 3">
                <div
                    v-for="(explosion, j) in 12"
                    :key="j"
                    class="explosion absolute -left-[2px] bottom-0 w-[4px] h-[80px]"
                ></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// Effect adapted from https://www.youtube.com/watch?v=K4K7HNavK4U

@mixin random-light-color() {
    background: rgb(random(128) + 128, random(128) + 128, 0);
}

.fireworks {
    background-color: rgba(50, 50, 64, 0.95);
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

.animate-credits {
    transform: translateY(100%);
    animation: 20s credits ease-in-out 1 forwards;
}

@keyframes credits {
    100% {
        transform: translateY(-100%);
    }
}
</style>
