<script setup lang="ts">
defineProps({
    sectionName: { type: String, required: true },
    sectionIcon: { type: String, required: false },
    focused: { type: Boolean, required: false }
});
</script>

<template>
    <li
        :class="`hover:scale-110 box-border flex items-center justify-center rounded text-black p-5 transition-transform gap-y-3 cursor-pointer menu-item ${
            focused ? '' : ''
        }`"
    >
        <h3 class="font-bold text-2xl">{{ sectionName }}</h3>
        <i :class="`${sectionIcon} text-2xl ml-3`"></i>
    </li>
</template>

<style>
.menu-item {
    background-color: var(--opaque-white, white);
}
</style>
