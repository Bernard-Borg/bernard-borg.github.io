<script setup lang="ts">
import moment from "moment";
import careerHistory, { CareerPosition, CareerRecord } from "@/components/sections/configs/Career";
import CareerLink from "@/components/CareerLink.vue";

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

const formatDate = (date: Date | undefined) => {
    if (date) {
        return moment(date, "DD/MM/YYYY").format("MMM YYYY");
    } else {
        return "Present";
    }
};
</script>

<template>
    <div>
        <div v-for="(careerRecord, i) in careerHistory" :key="i">
            <div :class="`p-3 py-5 flex flex-col border-dashed border-gray-400 ${i > 0 ? 'border-t' : ''}`">
                <template v-if="careerRecord.positions.length === 1">
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <div class="flex items-center">
                                <span class="text-lg font-bold">{{ careerRecord.company }}</span>
                                <span
                                    v-if="!careerRecord.positions[0].endDate"
                                    class="bg-blue-600 text-white text-sm px-2 py-1 rounded-lg ml-2"
                                >
                                    Current
                                </span>
                            </div>
                            <span class="text-md text-black">
                                {{ careerRecord.positions[0].title }} • {{ careerRecord.positions[0].type }}
                            </span>
                            <span class="text-md text-gray-600">{{ careerRecord.location }}</span>
                            <span class="text-sm text-gray-500">
                                {{ formatDate(careerRecord.positions[0].startDate) }} -
                                {{ formatDate(careerRecord.positions[0].endDate) }}
                            </span>
                        </div>
                        <div class="flex items-center justify-end mr-5">
                            <CareerLink text="Skills" class="w-24" />
                            <CareerLink text="Details" class="w-24" />
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="flex flex-col">
                        <div class="flex justify-between">
                            <div class="flex flex-col mb-2">
                                <div class="flex items-center">
                                    <span class="text-lg font-bold">{{ careerRecord.company }}</span>
                                    <span
                                        v-if="careerRecord.positions.some((x) => !x.endDate)"
                                        class="bg-blue-600 text-white text-sm px-2 py-1 rounded-lg ml-2"
                                    >
                                        Current
                                    </span>
                                </div>
                                <span class="text-md text-gray-600">{{ careerRecord.location }}</span>
                                <span class="text-sm text-gray-500">{{ getDuration(careerRecord) }}</span>
                            </div>
                            <div class="flex items-center justify-end mr-5">
                                <CareerLink text="Skills" class="w-24" />
                            </div>
                        </div>
                        <div v-for="(careerPosition, j) in careerRecord.positions" :key="j" class="flex gap-x-3">
                            <div class="flex flex-col items-end w-20">
                                <div class="w-10 h-4 border-l border-b border-dashed border-gray-500"></div>
                                <div
                                    v-if="j < careerRecord.positions.length - 1"
                                    class="w-10 h-full border-l border-dashed border-gray-500"
                                ></div>
                            </div>
                            <div class="flex justify-between w-full">
                                <div class="h-20 flex flex-col">
                                    <span class="font-bold">{{ careerPosition.title }}</span>
                                    <span class="text-md text-gray-600">{{ careerPosition.type }}</span>
                                    <span class="text-sm text-gray-500">
                                        {{ formatDate(careerPosition.startDate) }} -
                                        {{ formatDate(careerPosition.endDate) }}
                                    </span>
                                </div>
                                <div class="flex items-center justify-end mr-5">
                                    <CareerLink text="Details" class="w-24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
