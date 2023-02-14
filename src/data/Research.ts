export type Author = {
    name: string;
    link?: string;
};

export type ResearchRecord = {
    title: string;
    authors: Author[];
    link?: string;
};

const researchHistory: ResearchRecord[] = [
    {
        title: "Driver Drowsiness Detection",
        authors: [{ name: "Bernard Borg" }, { name: "Lalit Garg", link: "http://lalitgarg.info/" }]
    }
];

export default researchHistory;
