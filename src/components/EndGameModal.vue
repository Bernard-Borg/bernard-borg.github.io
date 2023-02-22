<script setup lang="ts">
import { onKeyUp } from "@vueuse/core";
import CombinationLock from "@/components/CombinationLock.vue";

const COMBINATION_LOCK_SLOTS = 4;

onKeyUp("Escape", close, { target: window });

function handleClick(e: MouseEvent) {
    if (e.target instanceof HTMLElement && e.target.className.includes("end-game-modal")) {
        close();
    }
}

const emit = defineEmits(["close"]);

function close() {
    emit("close");
}
</script>

<template>
    <div
        class="fixed w-full h-full top-0 left-0 flex justify-center items-center z-[100] end-game-modal"
        @click="handleClick"
    >
        <div class="bg-white rounded-lg flex min-w-[300px] flex-col">
            <div class="w-full flex justify-end py-2 px-3 items-center">
                <button @click="close">
                    <i class="fa-solid fa-xmark text-xl text-black"></i>
                </button>
            </div>
            <div class="overflow-auto p-8 overscroll-contain text-black max-w-[700px]">
                <span class="font-bold">Solve the following;</span>
                <pre class="font-sans whitespace-pre-line mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime laboriosam iusto esse
                    dolorem nobis sit animi earum aspernatur, quas repudiandae fuga perspiciatis necessitatibus commodi.
                    Rerum nemo id sunt iste debitis accusamus amet nobis cupiditate vitae ab veritatis, tenetur
                    excepturi porro expedita. Alias, iure. Quisquam asperiores quo quaerat ipsa, voluptate sint quae
                    eligendi delectus a doloribus error eum accusamus vero!
                </pre>
                <div class="w-full flex justify-center mt-5">
                    <CombinationLock :dials="COMBINATION_LOCK_SLOTS" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.end-game-modal {
    background-color: rgba(128, 128, 128, 0.5);
}
</style>
