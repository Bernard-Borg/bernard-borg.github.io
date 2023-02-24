<script setup lang="ts">
import CareerLink from "@/components/CareerLink.vue";
import { CareerRecord } from "@/data/Career";
import { PropType, ref } from "vue";
import { formatDate } from "@/utils/CareerUtils";
import { useAccordion } from "@/composables";
import { useGameStore } from "@/stores/game";

defineProps({
    careerRecord: { type: Object as PropType<CareerRecord>, required: true }
});

const accordionContent = ref<HTMLElement | undefined>();
const gameStore = useGameStore();

const { toggleAccordion, visible } = useAccordion(accordionContent);

const clickedCurrent = () => {
    if (gameStore.easterEggState.enabled) {
        gameStore.updateEasterEgg("dre");
    }
};
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col md:flex-row justify-between">
            <div class="flex flex-col">
                <div class="flex items-center">
                    <span class="text-lg font-bold">{{ careerRecord.company }}</span>
                    <span
                        v-if="!careerRecord.positions[0].endDate"
                        class="bg-blue-600 text-white text-sm px-2 py-1 rounded-lg ml-2"
                        @click="clickedCurrent"
                    >
                        Current
                    </span>
                </div>
                <span class="text-md text-black">
                    {{ careerRecord.positions[0].title }} • {{ careerRecord.positions[0].type }}
                </span>
                <span class="text-md text-gray-600">{{ careerRecord.location }}</span>
                <span class="text-sm text-gray-500">
                    {{ formatDate(careerRecord.positions[0].startDate) }} -
                    {{ formatDate(careerRecord.positions[0].endDate) }}
                </span>
            </div>
            <div class="flex gap-x-3 md:gap-x-0 items-center justify-end mt-3 md:mt-0 md:mr-5">
                <CareerLink v-if="careerRecord.skills" text="Skills" class="w-24" />
                <CareerLink
                    v-if="careerRecord.positions[0].description"
                    :text="visible ? 'Hide' : 'Details'"
                    :iconClass="visible ? `fa-solid fa-chevron-up` : `fa-solid fa-chevron-down`"
                    class="w-24"
                    @click="toggleAccordion"
                />
            </div>
        </div>
        <div class="flex flex-col accordion" ref="accordionContent">
            <ul v-if="careerRecord.positions[0].description" class="list-disc ml-5 md:ml-10 mt-3">
                <li v-for="(positionDescription, i) in careerRecord.positions[0].description" :key="i">
                    {{ positionDescription }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.accordion {
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    height: 0px;
}
</style>
