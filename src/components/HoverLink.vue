<script setup lang="ts">
import { type PropType, ref, computed, reactive } from "vue";
import { useElementBounding } from "@vueuse/core";

const props = defineProps({
    link: { type: String, required: false },
    text: { type: String, required: true },
    openInNewTab: { type: Boolean, default: true },
    tooltipPosition: {
        type: String as PropType<"top" | "bottom" | "left" | "right">,
        default: "top"
    },
    tooltipOffset: { type: Number, required: false, default: 7 }
});

const spanElement = ref<HTMLElement>();
const tooltipElement = ref<HTMLElement>();
const showingTooltip = ref<boolean>(false);

const spanBounds = reactive(useElementBounding(spanElement));
const tooltipBounds = reactive(useElementBounding(tooltipElement));

window.addEventListener("resize", () => {
    spanBounds.update();
    tooltipBounds.update();
});

const position = computed(() => {
    if (spanElement.value) {
        let hp;

        if (props.tooltipPosition === "left") {
            hp = spanBounds.left - tooltipBounds.width - props.tooltipOffset;
        } else if (props.tooltipPosition === "right") {
            hp = spanBounds.left + spanBounds.width + props.tooltipOffset;
        } else {
            hp = spanBounds.left + (spanBounds.width / 2 - tooltipBounds.width / 2);
        }

        let vp;

        if (props.tooltipPosition === "top") {
            vp = spanBounds.top - tooltipBounds.height - props.tooltipOffset;
        } else if (props.tooltipPosition === "bottom") {
            vp = spanBounds.top + spanBounds.height + props.tooltipOffset;
        } else {
            vp = spanBounds.top + (spanBounds.height / 2 - tooltipBounds.height / 2);
        }

        return {
            horizontalPosition: hp,
            verticalPosition: vp
        };
    }
});
</script>

<template>
    <span
        ref="spanElement"
        class="text-blue-600 hover:text-blue-500"
        :href="link"
        :target="openInNewTab ? '_blank' : '_self'"
        @mouseover="showingTooltip = true"
        @mouseleave="showingTooltip = false"
    >
        {{ text }}
    </span>
    <div
        ref="tooltipElement"
        class="absolute bg-white p-2 pointer-events-none border-black border-2 rounded-md"
        :style="{
            visibility: `${showingTooltip ? 'visible' : 'hidden'}`,
            left: `${position?.horizontalPosition ?? 0}px`,
            top: `${position?.verticalPosition ?? 0}px`
        }"
    >
        <slot>Aba</slot>
    </div>
</template>
