import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("global", () => {
    const isViewingPDF = ref<boolean>(false);

    function toggleViewingPDF() {
        isViewingPDF.value = !isViewingPDF.value;
    }

    return { isViewingPDF, toggleViewingPDF };
});
