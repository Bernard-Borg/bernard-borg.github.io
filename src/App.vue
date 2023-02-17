<script setup lang="ts">
import "animate.css";
import { useTimeoutFn } from "@vueuse/shared";
import { inject, Ref, ref } from "vue";
import SectionMenu from "@/components/SectionMenu.vue";
import Socials from "@/components/Socials.vue";
import { useSound } from "@vueuse/sound";
import hitSfx from "@/assets/sounds/hit.mp3";
import hitDownSfx from "@/assets/sounds/hit-down.mp3";
import PdfViewer from "@/components/PdfViewer.vue";

const clickCounter = ref<number>(0);
const profilePicture = ref<HTMLImageElement>();
const bringMeBack = ref<boolean>(false);

const viewingPdf = inject<Ref<boolean>>("viewingPDF");

const { play: playHit } = useSound(hitSfx, { volume: 0.5 });
const { play: playHitDown } = useSound(hitDownSfx, { volume: 0.5 });

const bringBack = () => {
    profilePicture.value?.classList.remove("animate__hinge");
    bringMeBack.value = false;
    clickCounter.value = 0;
};

const clickPicture = () => {
    if (clickCounter.value == 5) {
        playHitDown();

        profilePicture.value?.classList.add("animate__hinge");
        profilePicture.value?.classList.remove("animate__headShake");

        useTimeoutFn(() => {
            bringMeBack.value = true;
        }, 3000);
    } else if (clickCounter.value < 5) {
        if (profilePicture.value?.classList.contains("animate__headShake")) {
            profilePicture.value?.classList.remove("animate__headShake");
        }

        useTimeoutFn(() => {
            profilePicture.value?.classList.add("animate__headShake");
            playHit();
        }, 50);
    }

    clickCounter.value++;
};
</script>

<template>
    <template v-if="!viewingPdf">
        <header>
            <Socials />
        </header>
        <main>
            <div class="flex flex-col mb-10">
                <div class="flex flex-col items-center md:flex-row w-full justify-evenly mt-20 pb-10">
                    <div class="relative rounded-full" id="profilePicture">
                        <img
                            ref="profilePicture"
                            alt="Picture of Bernard Borg"
                            class="rounded-full aspect-square object-cover animate__animated transition-all duration-300"
                            src="/images/image.jpg"
                            @click="clickPicture"
                        />
                        <Transition enterActiveClass="animate__animated animate__fadeIn">
                            <button
                                v-if="bringMeBack"
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-white text-black p-3 rounded-lg"
                                @click="bringBack"
                            >
                                Bring me back
                            </button>
                        </Transition>
                    </div>
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

.animate__animated.animate__headShake {
    --animate-duration: 0.5s;
}

#profilePicture {
    width: 350px;
    box-shadow: 0 0 400px rgb(255 255 255 / 28%);
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

/* Wanted to customise hinge slightly */

@-webkit-keyframes hinge {
    0% {
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }

    20%,
    60% {
        -webkit-transform: rotate3d(0, 0, 1, -60deg);
        transform: rotate3d(0, 0, 1, -60deg);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        transform-origin: top right;
    }

    40%,
    80% {
        -webkit-transform: rotate3d(0, 0, 1, -40deg);
        transform: rotate3d(0, 0, 1, -40deg);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        transform-origin: top right;
        opacity: 1;
    }

    to {
        -webkit-transform: translate3d(0, 800px, 0);
        transform: translate3d(200px, 1000px, 0);
        opacity: 0;
    }
}

@keyframes hinge {
    0% {
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }

    20%,
    60% {
        -webkit-transform: rotate3d(0, 0, 1, -60deg);
        transform: rotate3d(0, 0, 1, -60deg);
        transform-origin: top right;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }

    40%,
    80% {
        -webkit-transform: rotate3d(0, 0, 1, -40deg);
        transform: rotate3d(0, 0, 1, -40deg);
        transform-origin: top right;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1;
    }

    to {
        -webkit-transform: translate3d(0, 800px, 0);
        transform: translate3d(200px, 1000px, 0);
        opacity: 0;
    }
}
</style>
