<script setup lang="ts">
import qualificationHistory, { QualificationRecord } from "@/data/Qualifications";
import { ref } from "vue";

const types = [...new Set(qualificationHistory.map((x) => x.type))];
const activeType = ref(types[0]);

const qualificationsSort = (a: QualificationRecord, b: QualificationRecord) => {
    const eqfSort = (b.eqfLevel ?? 0) - (a.eqfLevel ?? 0);

    if (eqfSort !== 0) {
        return eqfSort;
    } else {
        const yearSort = b.yearAchieved - a.yearAchieved;

        if (yearSort !== 0) {
            return yearSort;
        } else {
            return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
        }
    }
};
</script>

<template>
    <div class="flex flex-col">
        <div class="flex mb-3 overflow-auto">
            <button
                v-for="(type, i) in types"
                :class="`flex flex-1 px-4 py-2 md:px-5 md:py-3 justify-center cursor-pointer whitespace-nowrap ${
                    activeType === type
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-white hover:bg-blue-100 text-blue-600 border-1 border-blue-500 border'
                } ${i === 0 ? 'rounded-l' : i === types.length - 1 ? 'rounded-r' : ''}`"
                @click="activeType = type"
            >
                {{ type }}
            </button>
        </div>
        <div class="flex-col px-3">
            <div
                v-for="(qualification, i) in qualificationHistory
                    .filter((x) => x.type === activeType)
                    .sort(qualificationsSort)"
                class="flex py"
            >
                <div :class="`flex flex-col py-5 w-full border-dashed border-gray-400 ${i > 0 ? 'border-t' : ''}`">
                    <span class="text-lg font-bold">{{ qualification.name }}</span>
                    <span>{{ qualification.description }}</span>
                    <span>{{ qualification.institution }}</span>
                    <span>Achieved in {{ qualification.yearAchieved }}</span>
                    <span v-if="qualification.eqfLevel" class="text-sm mt-1">
                        MQF/EQF level {{ qualification.eqfLevel }}
                    </span>
                </div>
            </div>
            <p class="font-light text-sm text-right">Certificate scans available on request</p>
        </div>
    </div>
</template>
