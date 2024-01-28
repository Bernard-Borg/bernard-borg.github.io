<script setup lang="ts">
import { careerHistory, testimonials } from "@/data/Career";
import { ref } from "vue";
import SinglePositionCareerRec from "@/components/sections/records/SinglePositionCareerRec.vue";
import MultiplePositionCareerRec from "@/components/sections/records/MultiplePositionCareerRec.vue";
import HoverLink from "../HoverLink.vue";

const hiddenDownload = ref<HTMLAnchorElement>();
const testimonialsShown = ref<boolean>(false);

const download = (filename: string, text: string) => {
    if (!hiddenDownload.value) {
        return;
    }

    hiddenDownload.value.href = `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`;
    hiddenDownload.value.download = filename;

    hiddenDownload.value.click();
};

const stripHtml = (html: string) => {
    let tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
};

const downloadTestimonial = (name: string, testimonial: string) => {
    testimonial = stripHtml(testimonial);

    download(`testimonial_${name}.txt`, testimonial);
};
</script>

<template>
    <div>
        <a ref="hiddenDownload" hidden></a>
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
        <Transition
            enterActiveClass="animate__animated animate__fadeIn"
            leaveActiveClass="animate__animated animate__fadeOut"
        >
            <div v-if="testimonialsShown" class="mt-6 w-full flex justify-center">
                <div
                    v-for="(testimonial, i) in testimonials"
                    class="flex flex-col w-[300px] outline outline-black outline-1 rounded-md p-3"
                    style="box-shadow: 5px 6px 6px 0px grey"
                >
                    <i class="fa fa-quote-left text-3xl" aria-hidden="true"></i>
                    <span class="text-center font-light">{{ testimonial.quote }}</span>
                    <div class="flex flex-col w-full items-end mt-3">
                        <span class="text-md font-bold">{{ testimonial.name }}</span>
                        <span class="text-sm">{{ testimonial.workplace }}</span>
                        <HoverLink
                            v-if="testimonial.fullTestimonial"
                            text="Read full testimonial"
                            tooltipPosition="top"
                            class="cursor-help"
                            :disableTooltipTouch="true"
                            @touch="downloadTestimonial(testimonial.name, testimonial.fullTestimonial ?? '')"
                        >
                            <div class="max-w-[800px]">
                                <span v-html="testimonial.fullTestimonial"></span>
                            </div>
                        </HoverLink>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>
