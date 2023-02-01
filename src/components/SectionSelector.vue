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

const parentClassesWhenNotFocused = "hover:scale-110";
const parentClassesWhenFocused = "fixed top-0 right-0 left-0 backdrop-blur-md";
const classesWhenNotFocused = "";
const classesWhenFocused = "m-12 shadow-xl shadow-stone-500";

const isFocused = computed(() => props.focusedSection === props.sectionId);
</script>

<template>
    <div
        :class="`${
            isFocused ? parentClassesWhenFocused : parentClassesWhenNotFocused
        }`"
        :style="`height: ${isFocused ? '100vh' : ''}`"
    >
        <div
            ref="card"
            :class="`box-border flex flex-col bg-white text-black rounded p-8 transition-transform gap-y-3 ${
                isFocused ? classesWhenFocused : classesWhenNotFocused
            }`"
            :style="`height: ${isFocused ? 'calc(100% - 6rem)' : '250px'}`"
            @click="$emit('focused', sectionId)"
            @onClickOutside="$emit('lost-focus', sectionId)"
        >
            <div class="flex">
                <h3 class="font-bold text-2xl">{{ title }}</h3>
                <i :class="`text-2xl ml-3 ${icon}`"></i>
            </div>
            <div class="border-solid border-t-2 border-black">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style></style>
