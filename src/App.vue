<script setup lang="ts">
import { ref } from "vue";
import SectionSelector from "./components/SectionSelector.vue";

const focusedSection = ref<string>("");

const handleFocus = (section: string) => {
    focusedSection.value = section;
};

const handleFocusLoss = () => {
    focusedSection.value = "";
};
</script>

<template>
    <div class="absolute right-0 top-0 text-3xl gap-3 p-3 flex">
        <a
            href="https://github.com/Bernard-Borg/"
            target="_blank"
            class="hover:scale-110"
        >
            <i class="fa-brands fa-github"></i>
        </a>
        <a
            href="https://stackoverflow.com/users/13426975/bernard-borg"
            target="_blank"
            class="hover:scale-110"
        >
            <i class="fa-brands fa-stack-overflow"></i>
        </a>
        <a
            href="https://www.linkedin.com/in/bernard-borg/"
            target="_blank"
            class="hover:scale-110"
        >
            <i class="fa-brands fa-linkedin"></i>
        </a>
    </div>
    <div class="flex flex-col">
        <div class="flex w-full justify-evenly mt-20">
            <img
                class="rounded-full aspect-square object-cover"
                style="width: 350px"
                src="https://media.licdn.com/dms/image/C4D03AQFENYez-mpIQg/profile-displayphoto-shrink_800_800/0/1642376010470?e=1680739200&v=beta&t=lim4dPd3TnEjIiFxqij_JSk_6vc_hP2QI5UCtpAShI4"
            />
            <div class="flex flex-col justify-center">
                <h1 class="text-9xl font-bold">Bernard Borg</h1>
                <h2 class="text-5xl font-thin">Fullstack Software Developer</h2>
            </div>
        </div>
        <div class="grid grid-cols-3 pt-20 px-12 gap-16">
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
                title="Interests/Hobbies"
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
</style>
