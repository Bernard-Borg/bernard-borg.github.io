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
        name: "Professional Diploma in UX Design",
        institution: "UX Design Institute (through ICE Malta)",
        description: "https://www.credential.net/bf12b12a-ec56-40b2-a334-81302eae626e#gs.488b99",
        type: "IT-specific",
        yearAchieved: 2023,
        eqfLevel: 5
    },
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
        description: "A-levels: Computing, Chemistry, Pure Maths; Intermediate levels: German, Marketing, SOK",
        type: "Academic",
        yearAchieved: 2019,
        eqfLevel: 4
    },
    {
        name: "SEC Certificate",
        institution: "Stella Maris College",
        description: "O-levels: Maths, Computing, Chemistry, Physics, English, Maltese, English Lit., Religion, German",
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
