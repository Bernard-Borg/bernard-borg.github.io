<script setup lang="ts">
import { type Component, ref } from "vue";
import SectionMenuItem from "@/components/SectionMenuItem.vue";
import AboutMe from "@/components/sections/AboutMe.vue";
import Career from "@/components/sections/Career.vue";
import Research from "@/components/sections/Research.vue";
import Projects from "@/components/sections/Projects.vue";
import Qualifications from "@/components/sections/Qualifications.vue";

const focusedSection = ref<number | undefined>(0);

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
        name: "Career",
        icon: "fa-solid fa-laptop-code",
        component: Career
    },
    {
        name: "Research",
        icon: "fa-solid fa-book",
        component: Research
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
    <div class="flex flex-col pt-10 px-0 md:px-12 gap-0 md:gap-3">
        <nav>
            <ul class="flex md:gap-x-3">
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
        <div v-if="focusedSection !== undefined" class="flex">
            <Transition enter-active-class="animate__animated animate__fadeInLeftBig">
                <section
                    class="md:rounded text-black p-8 h-full w-full min-h-[500px]"
                    :key="focusedSection"
                    style="background: var(--opaque-white, #ffffff)"
                >
                    <h3 class="block lg:hidden text-2xl font-extrabold mb-3">
                        {{ portfolioSections[focusedSection].name }}
                    </h3>
                    <component :is="portfolioSections[focusedSection].component"></component>
                </section>
            </Transition>
        </div>
    </div>
</template>
