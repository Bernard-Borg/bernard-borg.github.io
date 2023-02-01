<script setup lang="ts">
import { useTimeoutFn } from "@vueuse/shared";
import "animate.css";
import { ref } from "vue";
import SectionSelector from "@/components/SectionSelector.vue";
import Socials from "@/components/Socials.vue";

const focusedSection = ref<string>("");
const clickCounter = ref<number>(0);
const profilePicture = ref<HTMLImageElement>();

const handleFocus = (section: string) => {
    focusedSection.value = section;
};

const handleFocusLoss = () => {
    focusedSection.value = "";
};

const playGame = () => {};

const clickPicture = () => {
    if (clickCounter.value >= 5) {
        playGame();
    } else {
        if (profilePicture.value?.classList.contains("animate__headShake")) {
            profilePicture.value?.classList.remove("animate__headShake");
        }

        useTimeoutFn(() => {
            profilePicture.value?.classList.add("animate__headShake");
        }, 50);
    }

    clickCounter.value++;
};
</script>

<template>
    <Socials />
    <div class="flex flex-col mb-10">
        <div
            class="flex flex-col items-center md:flex-row w-full justify-evenly mt-20"
        >
            <img
                ref="profilePicture"
                id="profilePicture"
                alt="Picture of Bernard Borg"
                class="rounded-full aspect-square object-cover animate__animated transition-all duration-300 shadow-xl shadow-white"
                src="/image.jpg"
                @click="clickPicture"
            />
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
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-20 px-12 gap-16"
        >
            <SectionSelector
                title="About Me"
                icon="fa-solid fa-circle-user"
                sectionId="about"
                :focusedSection="focusedSection"
                @focused="handleFocus"
                @lostFocus="handleFocusLoss"
            />
            <SectionSelector
                title="Education"
                icon="fa-solid fa-graduation-cap"
                sectionId="education"
                :focusedSection="focusedSection"
                @focused="handleFocus"
                @lostFocus="handleFocusLoss"
            />
            <SectionSelector
                title="Work"
                icon="fa-solid fa-laptop-code"
                sectionId="work"
                :focusedSection="focusedSection"
                @focused="handleFocus"
                @lostFocus="handleFocusLoss"
            />
            <SectionSelector
                title="Skills"
                icon="fa-regular fa-lightbulb"
                sectionId="skills"
                :focusedSection="focusedSection"
                @focused="handleFocus"
                @lostFocus="handleFocusLoss"
            />
            <SectionSelector
                title="Hobbies"
                icon="fa-solid fa-gamepad"
                sectionId="interests"
                :focusedSection="focusedSection"
                @focused="handleFocus"
                @lostFocus="handleFocusLoss"
            />
            <SectionSelector
                title="Qualifications"
                icon="fa-solid fa-certificate"
                sectionId="qualifications"
                :focusedSection="focusedSection"
                @focused="handleFocus"
                @lostFocus="handleFocusLoss"
            />
        </div>
    </div>
</template>

<style>
@import "@fortawesome/fontawesome-free/css/all.min.css";

:root {
    --custom-blue: rgb(37 99 235);
}

#profilePicture {
    width: 350px;
}

@media screen and (max-width: 1279px) {
    #profilePicture {
        width: 250px;
    }
}

@media screen and (max-width: 1023px) {
    #profilePicture {
        width: 200px;
    }
}

@media screen and (max-width: 767px) {
    #profilePicture {
        width: 300px;
    }
}
</style>
