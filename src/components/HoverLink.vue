<script setup lang="ts">
import { type PropType, ref, computed, reactive } from "vue";
import { useElementBounding, useEventListener } from "@vueuse/core";

const props = defineProps({
    text: { type: String, required: true },
    link: { type: String, required: false },
    openInNewTab: { type: Boolean, default: true },
    tooltipPosition: {
        type: String as PropType<"top" | "bottom" | "left" | "right">,
        default: "top"
    },
    tooltipOffset: { type: Number, required: false, default: 7 }
});

const anchorElement = ref<HTMLElement>();
const tooltipElement = ref<HTMLElement>();
const showingTooltip = ref<boolean>(false);

const anchorBounds = reactive(useElementBounding(anchorElement));
const tooltipBounds = reactive(useElementBounding(tooltipElement));

useEventListener(window, "resize", () => {
    anchorBounds.update();
    tooltipBounds.update();
});

const position = computed(() => {
    if (anchorElement.value && tooltipBounds) {
        let hp;

        if (props.tooltipPosition === "left") {
            hp = anchorBounds.left - tooltipBounds.width - props.tooltipOffset;
        } else if (props.tooltipPosition === "right") {
            hp = anchorBounds.left + anchorBounds.width + props.tooltipOffset;
        } else {
            hp = anchorBounds.left + (anchorBounds.width / 2 - tooltipBounds.width / 2);
        }

        let vp;

        if (props.tooltipPosition === "top") {
            vp = anchorBounds.top - tooltipBounds.height - props.tooltipOffset;
        } else if (props.tooltipPosition === "bottom") {
            vp = anchorBounds.top + anchorBounds.height + props.tooltipOffset;
        } else {
            vp = anchorBounds.top + (anchorBounds.height / 2 - tooltipBounds.height / 2);
        }

        return {
            horizontalPosition: hp,
            verticalPosition: vp
        };
    }
});
</script>

<template>
    <a
        ref="anchorElement"
        :class="`text-blue-600 hover:text-blue-500 whitespace-nowrap ${link ? 'cursor-pointer' : ''}`"
        :href="link"
        :target="openInNewTab ? '_blank' : '_self'"
        @mouseover="showingTooltip = true"
        @mouseleave="showingTooltip = false"
    >
        {{ text }}{{ link && openInNewTab ? " " : ""
        }}<i
            :class="`${
                link && openInNewTab ? 'inline-block' : 'hidden'
            } fa-solid fa-arrow-up-right-from-square text-md`"
        ></i>
    </a>
    <div
        v-if="$slots.default"
        ref="tooltipElement"
        class="absolute bg-white p-2 pointer-events-none border-black border-2 rounded-md"
        :style="{
            visibility: `${showingTooltip ? 'visible' : 'hidden'}`,
            left: `${position?.horizontalPosition ?? 0}px`,
            top: `${position?.verticalPosition ?? 0}px`
        }"
    >
        <slot></slot>
    </div>
</template>
