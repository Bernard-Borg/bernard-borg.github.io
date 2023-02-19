<script setup lang="ts">
import "animate.css";
import { useTimeoutFn } from "@vueuse/shared";
import { computed, ref } from "vue";
import SectionMenu from "@/components/SectionMenu.vue";
import Socials from "@/components/Socials.vue";
import { useSound } from "@vueuse/sound";
import hitSfx from "@/assets/sounds/hit.mp3";
import hitDownSfx from "@/assets/sounds/hit-down.mp3";
import PdfViewer from "@/components/PdfViewer.vue";
import Peeper from "@/components/Peeper.vue";
import { useLocalStorage } from "@vueuse/core";
import AchievementGet from "./components/AchievementGet.vue";
import { useGlobalStore } from "./stores/global";

const clickCounter = ref<number>(0);
const profilePicture = ref<HTMLImageElement>();
const bringMeBack = ref<boolean>(false);
const easterEggsFirstTime = ref<boolean>(false);
const eeModeEnabledText = ref<HTMLSpanElement>();
const eeModeEnabledContainer = ref<HTMLDivElement>();
const achievement1 = ref<InstanceType<typeof AchievementGet>>();
const globalStore = useGlobalStore();

const easterEggState = useLocalStorage(
    "nggyu-store",
    {
        enabled: false,
        bertu: false,
        grixu: false,
        dre: false,
        charles: false
    },
    { mergeDefaults: true }
);

const { play: playHit } = useSound(hitSfx, { volume: 0.5 });
const { play: playHitDown } = useSound(hitDownSfx, { volume: 0.5 });

const bringBack = () => {
    profilePicture.value?.classList.remove("animate__hinge");
    bringMeBack.value = false;
    clickCounter.value = 0;
};

const enableEasterEggMode = () => {
    if (!easterEggState.value.enabled) {
        easterEggState.value.enabled = true;
        easterEggsFirstTime.value = true;

        useTimeoutFn(() => {
            eeModeEnabledContainer.value?.classList.add("animate__animated", "animate__fadeOut");
        }, 3000);

        useTimeoutFn(() => {
            easterEggsFirstTime.value = false;
        }, 4000);
    }
};

const clickPicture = () => {
    if (clickCounter.value == 5) {
        playHitDown();

        profilePicture.value?.classList.add("animate__hinge");
        profilePicture.value?.classList.remove("animate__headShake");

        enableEasterEggMode();

        useTimeoutFn(() => {
            bringMeBack.value = true;
        }, 3000);
    } else if (clickCounter.value < 5) {
        profilePicture.value?.classList.remove("animate__headShake");

        useTimeoutFn(() => {
            profilePicture.value?.classList.add("animate__headShake");
            playHit();
        }, 50);
    }

    clickCounter.value++;
};

const remainingEasterEggs = computed(() => {
    const { enabled: _, ...easterEggs } = easterEggState.value;
    return easterEggs;
});
</script>

<template>
    <template v-if="!globalStore.isViewingPDF">
        <header>
            <div
                class="absolute top-0 left-0 bg-white rounded-md m-3 py-2 pl-3 pr-6 text-black"
                v-if="easterEggState.enabled"
            >
                <span>Easter eggs left: {{ Object.values(remainingEasterEggs).filter((x) => !x).length }}</span>
            </div>
            <Socials />
        </header>
        <main>
            <AchievementGet ref="achievement1" achievementText="Easter Egg 1" />
            <div
                v-if="easterEggsFirstTime"
                class="fixed w-full h-full bg-black/80 z-10 flex justify-center items-center"
                ref="eeModeEnabledContainer"
            >
                <span class="text-8xl top-1/2 arcade-classic change-color" ref="eeModeEnabledText">
                    EASTER EGG MODE ENABLED
                </span>
            </div>
            <div class="flex flex-col mb-10">
                <div class="flex flex-col items-center md:flex-row w-full justify-evenly mt-20 pb-10">
                    <div class="relative rounded-full flex">
                        <img
                            ref="profilePicture"
                            alt="Picture of Bernard Borg"
                            class="absolute rounded-full object-cover animate__animated transition-all duration-300"
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
                        <div
                            class="rounded-full overflow-hidden aspect-square relative pointer-events-none"
                            id="profilePicture"
                        >
                            <Peeper class="absolute bottom-0 left-1/2 custom-translate" :animate="bringMeBack" />
                        </div>
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

@font-face {
    font-family: ArcadeClassic;
    src: url("./assets/fonts/arcade_classic.ttf");
}

.arcade-classic {
    font-family: "ArcadeClassic";
}

.change-color {
    animation: 0.6s zoomIn, 0.6s linear change-color infinite;
}

@keyframes change-color {
    0% {
        color: darkred;
    }

    50% {
        color: darkorange;
    }

    100% {
        color: darkred;
    }
}

.custom-translate {
    transform: translate(-50%, 100%);
}

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
