type EasterEggs = {
    bertu: boolean;
    grixu: boolean;
    dre: boolean;
    charles: boolean;
};

type EasterEggState = EasterEggs & { enabled: boolean };

import { useLocalStorage, useTimeoutFn } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { pickBy } from "lodash-es";

export const useGameStore = defineStore("game", () => {
    const lastAchievement = ref<keyof EasterEggs>();
    const easterEggFirstTime = ref<boolean>(false);
    const animatingFinale = ref<boolean>(false);
    const resettingGame = ref<boolean>(false);

    const easterEggState = useLocalStorage<EasterEggState>(
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

    const remainingEasterEggs = computed(() => {
        const { enabled: _, ...easterEggs } = easterEggState.value;
        return pickBy(easterEggs, (value, key) => !value);
    });

    const numberOfEasterEggs = computed(() => {
        const { enabled: _, ...easterEggs } = easterEggState.value;
        return Object.keys(easterEggs).length;
    });

    const activateEasterEggMode = (): boolean => {
        if (!easterEggState.value.enabled) {
            easterEggState.value.enabled = true;
            easterEggFirstTime.value = true;

            return true;
        } else {
            return false;
        }
    };

    const updateEasterEgg = (easterEgg: keyof EasterEggs): void => {
        if (!easterEggState.value[easterEgg]) {
            easterEggState.value[easterEgg] = true;
            lastAchievement.value = easterEgg;
        }
    };

    const getEasterEggIndex = (easterEgg: keyof EasterEggs): number => {
        const { enabled: _, ...easterEggs } = easterEggState.value;
        return (
            Object.keys(easterEggs)
                .sort()
                .findIndex((x) => x === easterEgg) + 1
        );
    };

    const activateReward = () => {
        animatingFinale.value = true;
    };

    const resetGame = () => {
        animatingFinale.value = false;
        resettingGame.value = true;

        // Reset local storage state to everything false
        Object.keys(easterEggState.value).forEach((key) => {
            easterEggState.value[key as keyof EasterEggState] = false;
        });

        // Reset all game state
        useTimeoutFn(() => {
            lastAchievement.value = undefined;
            resettingGame.value = false;
            easterEggFirstTime.value = false;
        }, 2000);
    };

    const isInFinale = computed(() => {
        return easterEggState.value.enabled && !Object.keys(remainingEasterEggs.value).length;
    });

    return {
        lastAchievement,
        easterEggState,
        remainingEasterEggs,
        easterEggFirstTime,
        numberOfEasterEggs,
        isInFinale,
        animatingFinale,
        resettingGame,
        activateReward,
        updateEasterEgg,
        activateEasterEggMode,
        getEasterEggIndex,
        resetGame
    };
});
