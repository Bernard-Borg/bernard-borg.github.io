<script setup lang="ts">
import { onClickOutside, onKeyStroke } from "@vueuse/core";
import { computed, ref } from "vue";

const card = ref();

const emit = defineEmits(["focused", "lost-focus"]);

const props = defineProps({
    sectionId: { type: String, required: true },
    title: { type: String, required: true },
    focusedSection: { type: String, required: true },
    icon: { type: String, required: false }
});

onClickOutside(card, () => emit("lost-focus"));
onKeyStroke(["Escape"], () => emit("lost-focus"));

const isFocused = computed(() => props.focusedSection === props.sectionId);
</script>

<template>
    <div class="hover:scale-110">
        <div
            class="box-border flex flex-col bg-white text-black rounded p-8 transition-transform gap-y-3 cursor-pointer"
            style="height: 250px"
            @click="$emit('focused', sectionId)"
        >
            <div class="flex">
                <h3 class="font-bold text-2xl">{{ title }}</h3>
                <i :class="`text-2xl ml-3 ${icon}`"></i>
            </div>
            <div class="border-solid border-t-2 border-black">
                <slot name="summary-content"></slot>
            </div>
        </div>
    </div>
    <Transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
    >
        <div
            v-if="isFocused"
            class="fixed top-0 right-0 left-0 backdrop-blur-md"
            style="height: 100vh; z-index: 100"
        >
            <div
                ref="card"
                class="box-border flex flex-col bg-white text-black rounded p-8 transition-transform gap-y-3 m-12 shadow-xl shadow-stone-500"
                style="height: calc(100% - 6rem)"
                @onClickOutside="$emit('lost-focus', sectionId)"
            >
                <div class="flex">
                    <h3 class="font-bold text-2xl">{{ title }}</h3>
                    <i :class="`text-2xl ml-3 ${icon}`"></i>
                </div>
                <div class="border-solid border-t-2 border-black">
                    <slot name="full-content"></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
.animate__animated.animate__fadeIn,
.animate__animated.animate__fadeOut {
    --animate-duration: 0.5s;
}
</style>
