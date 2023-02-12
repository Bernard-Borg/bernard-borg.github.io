<script setup lang="ts">
import CareerLink from "@/components/CareerLink.vue";

type Author = {
    name: string;
    link?: string;
};

type ResearchRecord = {
    title: string;
    authors: Author[];
};

const researchHistory: ResearchRecord[] = [
    {
        title: "Driver Drowsiness Detection",
        authors: [{ name: "Bernard Borg" }, { name: "Lalit Garg", link: "http://lalitgarg.info/" }]
    }
];
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
            <CareerLink text="View Paper" class="mr-5" />
        </div>
    </div>
</template>
