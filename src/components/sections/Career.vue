<script setup lang="ts">
import careerHistory from "@/data/Career";
import SinglePositionCareerRec from "@/components/sections/records/SinglePositionCareerRec.vue";
import MultiplePositionCareerRec from "@/components/sections/records/MultiplePositionCareerRec.vue";
</script>

<template>
    <div>
        <div v-for="(careerRecord, i) in careerHistory" :key="i">
            <div :class="`p-3 py-5 flex flex-col border-dashed border-gray-400 ${i > 0 ? 'border-t' : ''}`">
                <template v-if="careerRecord.positions.length === 1">
                    <SinglePositionCareerRec :careerRecord="careerRecord" />
                </template>
                <template v-else>
                    <MultiplePositionCareerRec :careerRecord="careerRecord" />
                </template>
            </div>
        </div>
    </div>
</template>
