<script setup lang="ts">
import { onMounted, ref } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
import pdfData from "@/data/PDF";
import { useGlobalStore } from "@/stores/global";

const pdfBase64 = ref<string>("");

const isLoading = ref<boolean>(true);
const page = ref<number>(1);
const pageCount = ref<number>(1);
const pdfRef = ref();

const globalStore = useGlobalStore();

function handleDocumentRender() {
    isLoading.value = false;
    pageCount.value = pdfRef.value.pageCount;
}

const stopViewingPdf = () => {
    globalStore.toggleViewingPDF();
};

onMounted(() => {
    pdfBase64.value = `data:application/pdf;base64,${pdfData ?? ""}`;
});
</script>

<template>
    <div class="pdf-viewer">
        <div
            :class="`${
                isLoading ? 'justify-center' : 'justify-between'
            } pdf-viewer-header flex bg-slate-700 p-5 text-white`"
        >
            <template v-if="isLoading">Loading...</template>

            <template v-else>
                <button class="cursor-pointer" @click="stopViewingPdf">
                    <i class="fa-solid fa-arrow-left text-3xl" aria-hidden="true"></i>
                </button>
                <span class="flex gap-3 items-center text-md">
                    <button
                        :disabled="page <= 1"
                        @click="page--"
                        :class="`flex justify-center items-center w-[30px] aspect-square ${
                            page <= 1 ? 'invisible' : ''
                        }`"
                    >
                        ❮
                    </button>

                    {{ page }} / {{ pageCount }}

                    <button
                        :disabled="page >= pageCount"
                        @click="page++"
                        :class="`flex justify-center items-center w-[30px] aspect-square ${
                            page >= pageCount ? 'invisible' : ''
                        }`"
                    >
                        ❯
                    </button>
                </span>
                <span></span>
            </template>
        </div>
        <div class="pdf-viewer-content overflow-hidden max-w-[900px] my-0 mx-auto">
            <div class="pdf-content">
                <vue-pdf-embed ref="pdfRef" :source="pdfBase64" :page="page" @rendered="handleDocumentRender" />
            </div>
        </div>
    </div>
</template>

<style>
.pdf-viewer {
    background-color: rgb(229, 229, 229);
}

.vue-pdf-embed > div {
    margin-bottom: 8px;
    box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.pdf-viewer-header {
    box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.pdf-content {
    padding: 24px 16px;
}
</style>
