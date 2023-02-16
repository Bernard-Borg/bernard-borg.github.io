<script setup lang="ts">
defineProps({
    sectionName: { type: String, required: true },
    sectionIcon: { type: String, required: false },
    focused: { type: Boolean, required: false }
});
</script>

<template>
    <li
        :class="`border border-solid md:border-0 border-gray-400 box-border flex items-center justify-center md:rounded text-black p-3 md:p-5 transition-transform gap-y-3 flex-1 cursor-pointer menu-item ${
            focused ? 'outline outline-blue-600' : 'md:hover:scale-110'
        }`"
    >
        <h3 class="font-bold text-2xl hidden lg:inline">{{ sectionName }}</h3>
        <i :class="`${sectionIcon} text-lg md:text-2xl lg:ml-3`"></i>
    </li>
</template>

<style>
.menu-item {
    background-color: var(--opaque-white, white);
}
</style>
