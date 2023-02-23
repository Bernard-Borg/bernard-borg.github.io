<script setup lang="ts">
import { type PropType, ref, reactive } from "vue";
import { useElementBounding, useTimeoutFn } from "@vueuse/core";

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

let touchTimer: ReturnType<typeof setTimeout>;
const position = ref<{ horizontalPosition: Number; verticalPosition: Number }>();

const showHideTooltip = (show: boolean) => {
    showingTooltip.value = show;
    updatePosition();
};

const updatePosition = () => {
    anchorBounds.update();
    tooltipBounds.update();

    if (anchorBounds && tooltipBounds) {
        let hp;

        if (props.tooltipPosition === "left") {
            hp = anchorBounds.left - tooltipBounds.width - props.tooltipOffset;
        } else if (props.tooltipPosition === "right") {
            hp = anchorBounds.left + anchorBounds.width + props.tooltipOffset;

            if (hp + tooltipBounds.width > window.innerWidth) {
                hp = window.innerWidth - tooltipBounds.width;
            } else if (hp < 0) {
                hp = anchorBounds.left - tooltipBounds.width - props.tooltipOffset;
            }
        } else {
            hp = anchorBounds.left + (anchorBounds.width / 2 - tooltipBounds.width / 2);

            if (hp + tooltipBounds.width > window.innerWidth) {
                hp = window.innerWidth - tooltipBounds.width;
            }
        }

        if (hp < 0) {
            hp = 0;
        } else if (hp + tooltipBounds.width > window.innerWidth) {
            if (tooltipElement.value) {
                tooltipElement.value.style.maxWidth = `${window.innerWidth}px`;
            }
        }

        let vp;

        if (props.tooltipPosition === "top") {
            vp = anchorBounds.top - tooltipBounds.height - props.tooltipOffset;
        } else if (props.tooltipPosition === "bottom") {
            vp = anchorBounds.top + anchorBounds.height + props.tooltipOffset;
        } else {
            vp = anchorBounds.top + (anchorBounds.height / 2 - tooltipBounds.height / 2);
        }

        position.value = {
            horizontalPosition: hp,
            verticalPosition: vp
        };
    }
};

const doHover = () => {
    showHideTooltip(false);
    emit("hover-finish");
};

const doTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    showHideTooltip(true);
    touchTimer = setTimeout(() => showHideTooltip(false), 1000);
};

const doTouchEnd = () => {
    useTimeoutFn(() => {
        showHideTooltip(false);
    }, 100);
};

const emit = defineEmits(["hover-finish"]);
</script>

<template>
    <a
        ref="anchorElement"
        :class="`text-blue-600 hover:text-blue-500 whitespace-nowrap xs:select-none lg:select-auto disable-long-press ${
            link ? 'cursor-pointer' : ''
        }`"
        :href="link"
        :target="openInNewTab ? '_blank' : '_self'"
        style=""
        @mouseover="() => showHideTooltip(true)"
        @mouseleave="doHover"
        @touchstart="doTouchStart"
        @touchend="doTouchEnd"
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
        class="absolute bg-white p-2 pointer-events-none border-black border-2 rounded-md break-normal"
        :style="{
            visibility: `${showingTooltip ? 'visible' : 'hidden'}`,
            left: `${position?.horizontalPosition ?? 0}px`,
            top: `${position?.verticalPosition ?? 0}px`
        }"
    >
        <slot></slot>
    </div>
</template>

<style>
.disable-long-press {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
