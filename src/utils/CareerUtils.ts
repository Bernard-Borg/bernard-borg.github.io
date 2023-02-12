import moment from "moment";
import { CareerRecord, CareerPosition } from "../data/Career";

export const getDuration = (careerRecord: CareerRecord) => {
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

export const formatDate = (date: Date | undefined) => {
    if (date) {
        return moment(date, "DD/MM/YYYY").format("MMM YYYY");
    } else {
        return "Present";
    }
};
