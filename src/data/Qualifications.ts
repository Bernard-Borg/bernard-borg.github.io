export type QualificationRecord = {
    name: string;
    institution: string;
    type: "IT-specific" | "Academic" | "Extracurricular";
    yearAchieved: number;
    description?: string;
    eqfLevel?: number;
};

const qualificationHistory: QualificationRecord[] = [
    {
        name: "Bsc. in IT (Software Development)",
        institution: "University of Malta",
        type: "Academic",
        yearAchieved: 2022,
        eqfLevel: 6
    },
    {
        name: "MATSEC Certificate",
        institution: "St. Aloysius College",
        description:
            "A-levels: Computing (Private lessons), Chemistry, Pure Maths; Intermediate levels: German, Marketing, SOK",
        type: "Academic",
        yearAchieved: 2019,
        eqfLevel: 4
    },
    {
        name: "SEC Certificate",
        institution: "Stella Maris College",
        description: "O-levels: Maths, Computing, Chemistry, Physics, English, Maltese, English Lit., Religion",
        type: "Academic",
        yearAchieved: 2017,
        eqfLevel: 3
    },
    {
        name: "Pianoforte Grade 6",
        institution: "London College of Music",
        description: "Achieved Distinction",
        type: "Extracurricular",
        yearAchieved: 2015,
        eqfLevel: 3
    },
    {
        name: "Theory of Music Grade 6",
        institution: "London College of Music",
        description: "Achieved Distinction",
        type: "Extracurricular",
        yearAchieved: 2015,
        eqfLevel: 3
    },
    {
        name: "Grade 5 Cornet",
        institution: "Trinity College London",
        type: "Extracurricular",
        yearAchieved: 2015,
        eqfLevel: 2
    },
    {
        name: "ECDL Core Certificate",
        institution: "ECDL",
        type: "IT-specific",
        yearAchieved: 2016,
        eqfLevel: 3
    },
    {
        name: "Goethe-Zertifikat A2 Fit in Deutsch 2",
        institution: "Goethe Institut",
        type: "Academic",
        yearAchieved: 2016
    }
];

export default qualificationHistory;
