<script setup lang="ts">
defineProps({
    text: { type: String, required: true },
    iconClass: { type: String, required: false }
});
</script>

<template>
    <button
        class="text-white rounded md:text-blue-600 py-1 px-2 md:p-0 text-sm md:text-lg font-semibold md:underline underline-offset-4 md:hover:text-blue-500 bg-blue-600 hover:bg-blue-500 md:bg-transparent md:hover:bg-transparent"
    >
        {{ text }} <i :class="iconClass"></i>
    </button>
</template>
