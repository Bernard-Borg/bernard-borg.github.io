<script setup lang="ts">
defineProps({
    text: { type: String, required: true }
});
</script>

<template>
    <button class="text-blue-600 text-lg font-semibold underline underline-offset-4 hover:text-blue-500">
        {{ text }}
    </button>
</template>
