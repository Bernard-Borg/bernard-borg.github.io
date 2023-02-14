<script setup lang="ts">
import { type Component, ref } from "vue";
import SectionMenuItem from "@/components/SectionMenuItem.vue";
import AboutMe from "@/components/sections/AboutMe.vue";
import Career from "@/components/sections/Career.vue";
import Research from "@/components/sections/Research.vue";
import Projects from "@/components/sections/Projects.vue";
import Qualifications from "@/components/sections/Qualifications.vue";

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
    <div class="flex flex-col lg:grid grid-cols-1 lg:grid-cols-3 pt-10 px-0 md:px-12 gap-0 md:gap-8 lg:gap-16">
        <nav>
            <ul class="flex flex-row lg:flex-col md:gap-x-3 lg:gap-x-0 lg:gap-y-5">
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
            <Transition enter-active-class="animate__animated animate__fadeInLeftBig">
                <section
                    class="md:rounded text-black p-8 h-full w-full"
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
        <div v-else>
            <div>Aba</div>
        </div>
    </div>
</template>
