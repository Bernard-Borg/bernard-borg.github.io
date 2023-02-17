<script setup lang="ts">
import researchHistory from "@/data/Research";
import { inject, Ref } from "vue";

const viewingPdf = inject<Ref<boolean>>("viewingPDF");

const viewPdf = () => {
    if (viewingPdf) {
        viewingPdf.value = true;
    }
};
</script>

<template>
    <div class="flex flex-col">
        <div v-for="(research, i) in researchHistory" class="flex justify-between">
            <div class="flex flex-col">
                <span class="text-lg font-bold">
                    {{ research.title }}
                </span>
                <span class="text-md text-gray-600">
                    <component
                        v-for="(author, j) in research.authors"
                        :key="j"
                        :href="author.link ?? ''"
                        :is="author.link ? 'a' : 'span'"
                    >
                        <span :class="`${author.link ? 'text-blue-600 hover:text-blue-500 underline' : ''}`">
                            {{ author.name }} <i v-if="author.link" class="fa-solid fa-external-link"></i>
                        </span>
                        <span>{{ j < research.authors.length - 1 ? ", " : "" }}</span>
                    </component>
                </span>
            </div>
            <button
                class="bg-blue-600 hover:bg-blue-500 max-h-[40px] rounded-md text-white text-sm font-bold p-2 md:mr-5"
                @click="viewPdf"
            >
                View
            </button>
        </div>
    </div>
</template>
