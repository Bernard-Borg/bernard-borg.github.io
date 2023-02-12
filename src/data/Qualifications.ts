export type QualificationRecord = {
    name: string;
    institution: string;
    yearAchieved: number;
    description?: string;
    mqfLevel?: number;
};

const qualificationHistory: QualificationRecord[] = [
    {
        name: "Bsc. in IT (Software Development)",
        institution: "University of Malta",
        yearAchieved: 2022,
        mqfLevel: 6
    },
    {
        name: "MATSEC Certificate",
        institution: "St. Aloysius College",
        description:
            "A-levels: Computing (Private lessons), Chemistry, Pure Maths; Intermediate levels: German, Marketing, SOK",
        yearAchieved: 2019,
        mqfLevel: 4
    },
    {
        name: "SEC Certificate",
        institution: "Stella Maris College",
        description: "O-levels: Maths, Computing, Chemistry, Physics, English, Maltese, English Lit., Religion",
        yearAchieved: 2017,
        mqfLevel: 3
    }
];

export default qualificationHistory;
