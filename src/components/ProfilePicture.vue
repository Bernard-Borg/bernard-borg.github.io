<script setup lang="ts">
import Peeper from "@/components/Peeper.vue";
import { useSound } from "@vueuse/sound";
import { useTimeoutFn } from "@vueuse/shared";
import hitSfx from "@/assets/sounds/hit.mp3";
import hitDownSfx from "@/assets/sounds/hit-down.mp3";
import { useGameStore } from "@/stores/game";
import { ref } from "vue";

const gameStore = useGameStore();

const { play: playHit } = useSound(hitSfx, { volume: 0.5 });
const { play: playHitDown } = useSound(hitDownSfx, { volume: 0.5 });

const clickCounter = ref<number>(0);
const profilePicture = ref<HTMLImageElement>();
const bringMeBack = ref<boolean>(false);

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

        gameStore.activateEasterEggMode();

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
</script>

<template>
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
        <div class="rounded-full overflow-hidden aspect-square relative pointer-events-none" id="profilePicture">
            <Peeper class="absolute bottom-0 left-1/2 custom-translate" :animate="bringMeBack" easterEgg="bertu" />
        </div>
    </div>
</template>

<style>
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
