<script setup lang="ts">
import moment from "moment";
import careerHistory, { CareerPosition, CareerRecord } from "@/components/sections/configs/Career";

const getDuration = (careerRecord: CareerRecord) => {
    const positions = [...careerRecord.positions] as CareerPosition[];
    positions.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

    let years =
        ((positions[0].endDate?.getTime() ?? Date.now()) - positions[positions.length - 1].startDate.getTime()) /
        31536000000;

    let roundedYears = Math.floor(years);
    let months = years - roundedYears;

    months = Math.ceil(months * 12);

    if (months === 12) {
        ++roundedYears;
        months = 0;
    }

    return `${roundedYears >= 1 ? `${roundedYears} ` : ""}${
        roundedYears === 1 ? "year" : roundedYears > 1 ? "years" : ""
    } ${months >= 1 ? ` ${months} ` : ""} ${months === 1 ? "month" : months > 1 ? "months" : ""}`;
};
</script>

<template>
    <div>
        <div v-for="(careerRecord, i) in careerHistory" :key="i">
            <div
                v-if="careerRecord.positions.length === 1"
                :class="`p-3 py-5 flex flex-col border-dashed border-gray-400 ${i > 0 ? 'border-t' : ''}`"
            >
                <div class="flex items-center">
                    <span class="text-lg font-bold">{{ careerRecord.company }}</span>
                    <span
                        v-if="!careerRecord.positions[0].endDate"
                        class="bg-blue-500 text-white text-sm px-2 py-1 rounded-lg ml-2"
                    >
                        Current
                    </span>
                </div>
                <span class="text-md text-black">
                    {{ careerRecord.positions[0].title }} • {{ careerRecord.positions[0].type }}
                </span>
                <span class="text-md text-gray-600">{{ careerRecord.location }}</span>
                <span class="text-sm text-gray-500"
                    >{{ moment(careerRecord.positions[0].startDate, "DD/MM/YYYY").format("MMM YYYY") }} -
                    {{
                        careerRecord.positions[0].endDate
                            ? moment(careerRecord.positions[0].endDate).format("MMM YYYY")
                            : "Present"
                    }}</span
                >
            </div>
            <div v-else :class="`p-3 py-5 flex flex-col border-dashed border-gray-400 ${i > 0 ? 'border-t' : ''}`">
                <div class="flex items-center">
                    <span class="text-lg font-bold">{{ careerRecord.company }}</span>
                    <span
                        v-if="careerRecord.positions.some((x) => !x.endDate)"
                        class="bg-blue-500 text-white text-sm px-2 py-1 rounded-lg ml-2"
                    >
                        Current
                    </span>
                </div>
                <span class="text-md text-gray-600">{{ careerRecord.location }}</span>
                <span class="text-sm text-gray-500">{{ getDuration(careerRecord) }}</span>
            </div>
        </div>
    </div>
</template>
