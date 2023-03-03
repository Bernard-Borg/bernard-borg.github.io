<script setup lang="ts">
import { onKeyUp } from "@vueuse/core";
import CombinationLock from "@/components/CombinationLock.vue";
import HoverLink from "@/components/HoverLink.vue";
import { careerHistory } from "@/data/Career";
import { computed, ref, watch } from "vue";
import { useGameStore } from "@/stores/game";

const COMBINATION_LOCK_SLOTS = 4;
const hoverCounter = ref<number>(0);
const correctCombination = ref<string>("");
const gameStore = useGameStore();

correctCombination.value = `5${careerHistory.map((x) => x.positions.length).reduce((curr, acc) => acc + curr, 0)}84`;

onKeyUp("Escape", close, { target: window });

function handleClick(e: MouseEvent) {
    if (e.target instanceof HTMLElement && e.target.className.includes("end-game-modal")) {
        close();
    }
}

const emit = defineEmits(["close"]);

const hintText = computed<string>(() => {
    if (hoverCounter.value < 10) {
        return "1. The first digit is located in the a comment in the HTML.\n2. The second digit is located in the 'Career' screen\n3. The third digit is located in my research paper.\n4. The last digit is located somewhere in this modal.";
    } else if (hoverCounter.value >= 10 && hoverCounter.value < 25) {
        return "1. Access the HTML through inspect element and look for comments.\n2. Count the number of job positions there are listed in the Careers section (include positions which are at the same company).\n3. Sum the digits of the FPS of the SVM classifier in my 'Driver Drowsiness Detection' research paper (page 41, table 7)\n4. Look carefully at this hint.";
    } else if (hoverCounter.value >= 25 && hoverCounter.value < 50) {
        return "You're persistent! The last digit is 4";
    } else if (hoverCounter.value >= 50 && hoverCounter.value < 100) {
        return `Damn, you didn't take a hint. Here is your reward: ${correctCombination.value}`;
    } else if (hoverCounter.value >= 100 && hoverCounter.value < 500) {
        return "Why haven't you left yet?";
    } else {
        return "💀. Leave, seriously, you're wasting your time from here on out.";
    }
});

watch(
    () => gameStore.animatingFinale,
    (newValue) => {
        if (newValue) {
            emit("close");
        }
    }
);

function close() {
    emit("close");
}
</script>

<template>
    <div
        class="fixed w-full h-full top-0 left-0 flex justify-center items-center z-[100] end-game-modal"
        @click="handleClick"
    >
        <div class="bg-white rounded-lg flex max-w-[87%] lg:min-w-[300px] flex-col pointer-events-auto max-h-[87%]">
            <div class="w-full flex justify-end py-2 px-3 items-center">
                <button @click="close">
                    <i class="fa-solid fa-xmark text-xl text-black"></i>
                </button>
            </div>
            <div class="overflow-auto pb-8 px-10 overscroll-contain text-black">
                <p class="text-blue-500 font-bold text-lg mb-5">
                    Congratulations 🎉, you have found all {{ gameStore.numberOfEasterEggs }} Easter eggs.
                </p>
                <span class="font-bold text-lg">Now you must solve this riddle;</span>
                <span class="float-right text-md cursor-pointer">
                    <HoverLink text="Hint" @hover-finish="hoverCounter += 1" tooltipPosition="right">
                        <pre class="whitespace-pre-line">{{ hintText }}</pre>
                    </HoverLink>
                </span>
                <pre class="whitespace-pre-line mt-4">
                    Uncover my secrets, in lock and code,
                    A puzzle of intrigue for the bold.
                    For the first key, you must look at the source,
                    Where lines of code run their course.

                    For the second key, a career story to unfold,
                    Sum up the positions, in order they were enrolled.
                    Concatenate my drowsiness detector's fps next,
                    To unlock a secret that is truly complex.
                    
                    Keep searching on, don't be a quitter,
                    This final digit, you'll need to consider.
                    The answer lies within this very screen,
                    A clue or two, to make your mind keen.

                    Four keys, a combination to unseal,
                    A challenge for the inquisitive to reveal.
                    Crack the code, and discover the treasures inside,
                    Of my website's depths, where hidden wonders reside.
                </pre>
                <span class="text-xs text-blue-500 hover:text-blue-600 inline-block text-right w-full">
                    Generated with ChatGPT 🤯
                </span>
                <div class="w-full flex justify-center mt-5">
                    <CombinationLock :dials="COMBINATION_LOCK_SLOTS" :correctCombination="correctCombination" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.end-game-modal {
    background-color: rgba(128, 128, 128, 0.5);

    pre {
        font-family: Inter, sans-serif;
    }
}
</style>
