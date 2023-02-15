<script setup lang="ts">
import { careerHistory, testimonials } from "@/data/Career";
import { ref } from "vue";
import SinglePositionCareerRec from "@/components/sections/records/SinglePositionCareerRec.vue";
import MultiplePositionCareerRec from "@/components/sections/records/MultiplePositionCareerRec.vue";

const testimonialsShown = ref<boolean>(false);
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
        <button
            class="rounded-md bg-blue-600 py-2 px-3 text-[0.85rem] font-semibold leading-5 text-white hover:bg-blue-500 my-0 mx-auto block"
            @click="testimonialsShown = !testimonialsShown"
        >
            {{ testimonialsShown ? "Hide" : "Show" }} Testimonials
        </button>
        <div v-if="testimonialsShown">
            <div v-for="(testimonial, i) in testimonials">
                {{ testimonial }}
            </div>
        </div>
    </div>
</template>
