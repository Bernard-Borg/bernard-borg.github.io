<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import { ref, watch } from "vue";
import EndGameModal from "@/components/EndGameModal.vue";

const gameStore = useGameStore();
const isEndGameModalShowing = ref<boolean>(false);

watch(
    () => gameStore.isInFinale,
    (newValue) => {
        if (newValue) {
            isEndGameModalShowing.value = true;
        }
    }
);
</script>

<template>
    <div
        v-if="gameStore.easterEggState.enabled && !gameStore.isInFinale"
        class="absolute top-0 left-0 bg-white rounded-md m-3 py-2 pl-3 pr-6 text-black z-10"
    >
        <span> Easter eggs left: {{ Object.values(gameStore.remainingEasterEggs).length }} </span>
    </div>
    <button
        v-else-if="gameStore.isInFinale && !isEndGameModalShowing"
        id="openModalButton"
        class="absolute top-0 left-0 bg-white rounded-md m-3 text-black py-2 px-3 z-10 text-center"
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
