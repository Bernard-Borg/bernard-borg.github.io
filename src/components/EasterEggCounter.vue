<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import { ref, watch } from "vue";
import EndGameModal from "@/components/EndGameModal.vue";
import winSfx from "@/assets/sounds/win-sfx.mp3";
import { useSound } from "@vueuse/sound";

const gameStore = useGameStore();
const isEndGameModalShowing = ref<boolean>(false);

const { play: playWin } = useSound(winSfx, { volume: 0.3 });

watch(
    () => gameStore.isInFinale,
    (newValue) => {
        if (newValue) {
            isEndGameModalShowing.value = true;
            playWin();
        }
    }
);
</script>

<template>
    <div
        v-if="gameStore.easterEggState.enabled && !gameStore.isInFinale"
        class="absolute top-0 left-0 bg-white rounded-md m-3 py-2 px-3 text-black z-[100]"
    >
        <span class="text-sm md:text-md"
            >Easter eggs left: {{ Object.values(gameStore.remainingEasterEggs).length }}</span
        >
    </div>
    <button
        v-else-if="gameStore.isInFinale && !isEndGameModalShowing && !gameStore.animatingFinale"
        id="openModalButton"
        class="absolute top-0 left-0 bg-white rounded-md m-3 text-black py-2 px-3 z-[100] text-center"
        @click="isEndGameModalShowing = true"
    >
        Reopen Modal
    </button>
    <EndGameModal v-if="isEndGameModalShowing" @close="isEndGameModalShowing = false" />
</template>

<style>
#openModalButton {
    background: linear-gradient(white, #dcd3ca);
}

#openModalButton:hover {
    background: linear-gradient(#dcd3ca, #beb0a3);
}
</style>
