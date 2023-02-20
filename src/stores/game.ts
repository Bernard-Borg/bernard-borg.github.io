type EasterEggs = {
    bertu: boolean;
    grixu: boolean;
    dre: boolean;
    charles: boolean;
};

type EasterEggState = EasterEggs & { enabled: boolean };

import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { pickBy } from "lodash-es";

export const useGameStore = defineStore("game", () => {
    const lastAchievement = ref<keyof EasterEggs>();
    const easterEggFirstTime = ref<boolean>(false);

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

    return {
        lastAchievement,
        easterEggState,
        remainingEasterEggs,
        easterEggFirstTime,
        updateEasterEgg,
        activateEasterEggMode,
        getEasterEggIndex
    };
});
