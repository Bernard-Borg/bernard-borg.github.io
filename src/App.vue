<script setup lang="ts">
import "animate.css";
import { useGlobalStore } from "@/stores/global";

import SectionMenu from "@/components/SectionMenu.vue";
import Socials from "@/components/Socials.vue";
import PdfViewer from "@/components/PdfViewer.vue";
import Achievements from "@/components/Achievements.vue";
import EasterEggCounter from "@/components/EasterEggCounter.vue";
import EasterEggModeEnabled from "@/components/EasterEggModeEnabled.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";

const globalStore = useGlobalStore();
</script>

<template>
    <template v-if="!globalStore.isViewingPDF">
        <header>
            <EasterEggCounter />
            <Socials />
        </header>
        <main>
            <Achievements />
            <EasterEggModeEnabled />
            <div class="flex flex-col mb-10">
                <div class="flex flex-col items-center md:flex-row w-full justify-evenly mt-20 pb-10">
                    <ProfilePicture />
                    <div class="flex flex-col justify-center mt-10 md:mt-0">
                        <h1
                            class="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center md:text-left transition-all duration-300"
                        >
                            Bernard Borg
                        </h1>
                        <h2
                            class="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-thin text-center md:text-left transition-all duration-300"
                        >
                            Fullstack Software Developer
                        </h2>
                    </div>
                </div>
                <SectionMenu />
            </div>
        </main>
        <footer class="text-center gap-y-1 pt-6 pb-8">
            <span class="text-sm">
                Handcrafted by yours truly <i class="fa-regular fa-copyright" aria-hidden="true"></i>
                {{ new Date().getFullYear() }}
            </span>
        </footer>
    </template>
    <template v-else>
        <PdfViewer />
    </template>
</template>

<style>
@import "@fortawesome/fontawesome-free/css/all.min.css";
</style>
