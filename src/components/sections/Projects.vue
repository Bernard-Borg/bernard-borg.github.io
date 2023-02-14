<script setup lang="ts">
import projectsList from "@/data/Projects";
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div
            v-for="(project, i) in projectsList"
            class="flex flex-col bg-blue-400 mb-3 justify-between outline outline-black outline-1 rounded-md"
        >
            <div class="flex bg-white items-center p-3 justify-between">
                <span class="text-lg font-bold bg-white">{{ project.name }}</span>
                <div class="flex gap-x-2">
                    <a v-if="project.downloadable" :href="project.liveLink" target="_blank">
                        <span
                            class="flex items-center justify-center p-2 h-[30px] aspect-square rounded-md bg-green-400 hover:bg-green-500"
                        >
                            <i class="fa-solid fa-download text-sm" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a v-else-if="project.liveLink" :href="project.liveLink" target="_blank">
                        <span
                            class="flex items-center justify-center p-2 h-[30px] aspect-square rounded-md bg-blue-600 hover:bg-blue-500"
                        >
                            <i class="fa-solid fa-link text-white text-xs"></i>
                        </span>
                    </a>
                    <a v-if="project.githubLink" :href="project.githubLink" target="_blank">
                        <span
                            class="flex items-center justify-center p-2 h-[30px] aspect-square rounded-md bg-gray-800 hover:bg-gray-700"
                        >
                            <i class="fa-brands fa-github text-white text-sm" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
            </div>
            <div v-if="project.previewImage"><img :src="project.previewImage" /></div>
            <div v-else class="flex items-center justify-center">Preview unavailable</div>
            <div class="bg-white text-sm p-3">
                <span v-if="project.learningOutcomes">
                    <b>Learning outcomes:</b> {{ project.learningOutcomes?.join(", ") }}
                </span>
            </div>
        </div>
    </div>
</template>
