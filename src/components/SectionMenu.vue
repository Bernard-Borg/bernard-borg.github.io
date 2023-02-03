<script setup lang="ts">
import { type Component, ref } from "vue";
import SectionMenuItem from "@/components/SectionMenuItem.vue";
import AboutMe from "@/components/sections/AboutMe.vue";
import Education from "@/components/sections/Education.vue";
import Work from "@/components/sections/Work.vue";
import Skills from "@/components/sections/Skills.vue";
import Projects from "@/components/sections/Projects.vue";
import Qualifications from "@/components/sections/Qualifications.vue";
import { profile } from "console";

const focusedSection = ref<number | undefined>();

interface PortfolioSection {
    name: string;
    component?: Component;
    icon?: string;
}

const portfolioSections: PortfolioSection[] = [
    {
        name: "About Me",
        icon: "fa-solid fa-circle-user",
        component: AboutMe
    },
    {
        name: "Education",
        icon: "fa-solid fa-graduation-cap",
        component: Education
    },
    {
        name: "Work",
        icon: "fa-solid fa-laptop-code",
        component: Work
    },
    {
        name: "Skills",
        icon: "fa-solid fa-arrow-trend-up",
        component: Skills
    },
    {
        name: "Projects",
        icon: "fa-solid fa-clipboard-list",
        component: Projects
    },
    {
        name: "Qualifications",
        icon: "fa-solid fa-certificate",
        component: Qualifications
    }
];
</script>

<template>
    <nav>
        <ul class="flex flex-col gap-y-5">
            <SectionMenuItem
                v-for="(section, i) in portfolioSections"
                :key="i"
                @click="focusedSection = i"
                :sectionName="section.name"
                :sectionIcon="section.icon"
                :focused="focusedSection === i"
            />
        </ul>
    </nav>
    <div v-if="focusedSection !== undefined" class="col-span-2 flex">
        <Transition
            enter-active-class="animate__animated animate__fadeInLeftBig"
        >
            <div
                class="bg-white rounded text-black p-8 h-full w-full"
                :key="focusedSection"
            >
                <h3 class="block lg:hidden">
                    {{ portfolioSections[focusedSection].name }}
                </h3>
                <component
                    :is="portfolioSections[focusedSection].component"
                ></component>
            </div>
        </Transition>
    </div>
    <div v-else>
        <div>Aba</div>
    </div>
</template>
