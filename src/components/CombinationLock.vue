<script setup lang="ts">
import { computed, ref } from "vue";
import lockSfx from "@/assets/sounds/combination-lock.mp3";
import unlockSfx from "@/assets/sounds/unlock-sfx.mp3";
import { useSound } from "@vueuse/sound";

const props = defineProps({
    dials: { type: Number, required: true, default: 3 },
    correctCombination: { type: String, required: true }
});

const dialContents = ref<Array<Array<number>>>(
    new Array(props.dials).fill(null).map(() => [9, 0, 1, 2, 3, 4, 5, 6, 7, 8])
);

const { play: playLockSfx } = useSound(lockSfx, { volume: 0.3 });
const { play: playUnlockSfx } = useSound(unlockSfx, { volume: 0.3 });
const correct = ref<boolean | undefined>();

const combo = computed<string>(() => {
    return dialContents.value.map((x) => x[1]).join("");
});

const dialMove = (index: number) => {
    const itemRemoved = dialContents.value[index].shift() ?? 0;
    dialContents.value[index].push(itemRemoved);
    playLockSfx();
};

const checkCombination = () => {
    correct.value = combo.value === props.correctCombination;

    if (correct.value) {
        playUnlockSfx();
    }
};
</script>

<template>
    <!-- Credit to MacEvelly for his inspiration: https://codepen.io/MacEvelly/pen/gpGZGZ -->
    <div class="flex items-center">
        <div class="lockInset">
            <div class="lockWrapper">
                <div v-for="(dial, i) in dialContents" :key="i" class="dial" @click="() => dialMove(i)">
                    <ol>
                        <li v-for="(item, j) in dial" :key="j">
                            {{ item }}
                        </li>
                    </ol>
                </div>
                <div class="shadow"></div>
            </div>
        </div>
        <button
            :class="`btnCheck ml-10 ${
                correct === false ? 'border border-red-500' : correct === true ? 'border border-green-500' : ''
            }`"
            @click="checkCombination"
            :disabled="correct"
        >
            Check
        </button>
    </div>
</template>

<style lang="scss">
$lockHeight: 120px;

.lockInset {
    display: inline-block;
    padding: 10px;
    border-radius: 15px;
    box-shadow: inset 0 -8px 4px -4px #b1aaa1, 0 7px 10px rgba(0, 0, 0, 0.07), 0 14px 10px rgba(0, 0, 0, 0.07),
        0 20px 10px rgba(0, 0, 0, 0.07), 0 27px 10px rgba(0, 0, 0, 0.07), 0 34px 10px rgba(0, 0, 0, 0.07),
        0 2px 3px 1px rgba(0, 0, 0, 0.5);

    .lockWrapper {
        text-align: center;
        position: relative;
        background: linear-gradient(black 13%, #403c3a, black 75%, #110c14, black 85%);
        border-radius: 8px;
    }

    .dial {
        display: inline-block;
        height: $lockHeight;
        width: 35px;
        margin: 0px 5px;
        background: linear-gradient(
            #000000 0%,
            #000006 3%,
            #08000d 4%,
            #292527 7%,
            #55514c 9%,
            #847f76 11%,
            #979289 12%,
            #bab3a9 15%,
            #d9cfc6 17%,
            #f4eae1 19%,
            #fff4ec 20%,
            #fffffc 22%,
            #ffffff 24%,
            #fffffe 33%,
            #fffdf5 35%,
            #fef3eb 37%,
            #d4ccc2 45%,
            #ada69d 54%,
            #726d66 65%,
            #595550 71%,
            #4f4b47 74%,
            #4b4743 76%,
            #4b4743 79%,
            #4f4b47 80%,
            #6a665f 84%,
            #6d6861 85%,
            #6a665f 88%,
            #65605a 89%,
            #54504b 91%,
            #0d0711 98%,
            #02000a 99%,
            #000004 100%
        );
        border: 4px solid rgba(0, 0, 0, 0.25);
        border-top: none;
        border-bottom: none;
        overflow: hidden;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5), 0 -2px 0 rgba(255, 255, 255, 0.1);
        color: #827d74;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 0 8px 10px rgba(0, 0, 0, 0.2), 0 13px 10px rgba(0, 0, 0, 0.2);

        ol li {
            font-weight: 600;
            height: calc($lockHeight / 3);
            font-size: 30px;
            user-select: none;
        }
    }

    .shadow {
        pointer-events: none;
        position: absolute;
        top: 0px;
        background: linear-gradient(black 0%, transparent 40%, transparent 60%, black 100%);
        border-radius: 8px;
        height: $lockHeight;
        width: 100%;
    }
}

.btnCheck {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #999;

    &:hover {
        background: linear-gradient(#dcd3ca, #beb0a3);
    }

    &:active {
        box-shadow: inset 0 7px 10px rgba(0, 0, 0, 0.07), inset 0 34px 10px rgba(0, 0, 0, 0.07),
            inset 0 2px 3px 1px rgba(0, 0, 0, 0.5);
    }
}
</style>
