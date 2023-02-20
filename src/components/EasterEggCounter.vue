<script setup lang="ts">
import { useGameStore } from "@/stores/game";

const gameStore = useGameStore();
</script>

<template>
    <div
        v-if="gameStore.easterEggState.enabled"
        class="absolute top-0 left-0 bg-white rounded-md m-3 py-2 pl-3 pr-6 text-black"
    >
        <span> Easter eggs left: {{ Object.values(gameStore.remainingEasterEggs).length }} </span>
    </div>
</template>
