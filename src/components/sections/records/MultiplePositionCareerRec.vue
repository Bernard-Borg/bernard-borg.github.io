<script setup lang="ts">
import CareerLink from "@/components/CareerLink.vue";
import { PropType } from "vue";
import { CareerRecord } from "@/data/Career";
import CareerPosition from "@/components/sections/records/CareerPosition.vue";
import { getDuration } from "@/utils/CareerUtils";

defineProps({
    careerRecord: { type: Object as PropType<CareerRecord>, required: true }
});
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col md:flex-row justify-between mb-3 md:mb-0">
            <div class="flex flex-col md:mb-2">
                <div class="flex items-center">
                    <span class="text-lg font-bold">{{ careerRecord.company }}</span>
                    <span
                        v-if="careerRecord.positions.some((x) => !x.endDate)"
                        class="bg-blue-600 text-white text-sm px-2 py-1 rounded-lg ml-2"
                    >
                        Current
                    </span>
                </div>
                <span class="text-md text-gray-600">{{ careerRecord.location }}</span>
                <span class="text-sm text-gray-500">{{ getDuration(careerRecord) }}</span>
            </div>
            <div class="flex items-center justify-end mt-3 md:mt-0 md:mr-5">
                <CareerLink v-if="careerRecord.skills" text="Skills" class="w-24" />
            </div>
        </div>
        <div v-for="(careerPosition, i) in careerRecord.positions" :key="i" class="flex gap-x-3">
            <CareerPosition
                :careerPosition="careerPosition"
                :index="i"
                :careerRecordPositions="careerRecord.positions.length"
            />
        </div>
    </div>
</template>
