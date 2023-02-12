<script setup lang="ts">
import CareerLink from "@/components/CareerLink.vue";
import { PropType, ref } from "vue";
import { formatDate } from "@/utils/CareerUtils";
import { CareerPosition } from "@/data/Career";
import { useAccordion } from "@/composables";

defineProps({
    careerPosition: { type: Object as PropType<CareerPosition>, required: true },
    index: { type: Number, required: true },
    careerRecordPositions: { type: Number, required: true }
});

const accordionContent = ref<HTMLElement | undefined>();

const { toggleAccordion, visible } = useAccordion(accordionContent);
</script>

<template>
    <div class="flex flex-col items-end w-20">
        <div class="w-10 h-4 border-l border-b border-dashed border-gray-500"></div>
        <div v-if="index < careerRecordPositions - 1" class="w-10 h-full border-l border-dashed border-gray-500"></div>
    </div>
    <div class="flex flex-col w-full">
        <div class="flex justify-between w-full">
            <div class="h-20 flex flex-col">
                <span class="font-bold">{{ careerPosition.title }}</span>
                <span class="text-md text-gray-600">{{ careerPosition.type }}</span>
                <span class="text-sm text-gray-500">
                    {{ formatDate(careerPosition.startDate) }} -
                    {{ formatDate(careerPosition.endDate) }}
                </span>
            </div>
            <div class="flex items-center justify-end mr-5">
                <CareerLink
                    v-if="careerPosition.description"
                    :text="visible ? 'Hide' : 'Details'"
                    class="w-24"
                    @click="toggleAccordion"
                />
            </div>
        </div>
        <div class="flex flex-col accordion" ref="accordionContent">
            <ul v-if="careerPosition.description" class="list-disc ml-10 my-4">
                <li v-for="(positionDescription, i) in careerPosition.description" :key="i">
                    {{ positionDescription }}
                </li>
            </ul>
        </div>
    </div>
</template>
