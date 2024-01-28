export type Skill = {
    name: string;
    type: "Language" | "Library" | "Framework" | "Tool" | "API" | "Database" | "Other";
    familiarity: "Expert" | "Advanced" | "Intermediate" | "Novice" | "Basic";
};

export type CareerPosition = {
    title: string;
    type: "Internship" | "Part-time" | "Full-time";
    startDate: Date;
    endDate?: Date;
    description?: Array<string>;
};

export type Testimonial = {
    name: string;
    quote: string;
    workplace: string;
    signature?: string;
};

export type CareerRecord = {
    company: string;
    positions: Array<CareerPosition>;
    skills?: Array<Skill>;
    location?: string;
};

const careerHistory: CareerRecord[] = [
    {
        company: "PwC Malta / Megabyte Ltd (acquired)",
        positions: [
            {
                title: "Fullstack Software Developer",
                type: "Full-time",
                startDate: new Date("07/01/2023"),
                description: [
                    "Continued development on the multi-year project from the Junior position",
                    "Created PowerShell scripts to generate Typescript unions to improve maintainability",
                    "Successfully presented the project to important clients",
                    "Developed reports using DevExpress's XtraReports",
                    "Worked on soft-skills including communication, feedback-giving and teamwork"
                ]
            },
            {
                title: "Junior Software Developer",
                type: "Full-time",
                startDate: new Date("09/01/2022"),
                endDate: new Date("07/01/2023"),
                description: [
                    "Maintained a legacy codebase written in VB.NET and another legacy system written in .NET Framework 4 (C#)",
                    "Added new features and performed refactoring on an ongoing Vue + .NET 6 project",
                    "Added new features to a PWA mobile application written in vanilla JavaScript",
                    "Designed, implemented and documented (through DevOps) the front-end of a large-scale project (Vue 3 + Vite + Pinia + Typescript + Bootstrap 5 + SASS) and assisted in the design and implementation of the back-end (.NET + C#) and its integration with the front-end and an Oracle database",
                    "Created wireframes using Figma",
                    "Created a large number of Vue components from scratch and adjusted existing ones",
                    "Was part of multiple projects using an Agile approach, extensively using tools such as DevOps and Git",
                    "Met with clients to clarify requirements for the design of the system",
                    "Gave training to colleagues on VueJS"
                ]
            },
            {
                title: "Trainee Software Developer",
                type: "Internship",
                startDate: new Date("03/01/2022"),
                endDate: new Date("09/01/2022"),
                description: [
                    "As a trainee, I was assigned to learning more about the technologies I would be using, reading in-depth into concepts such as parallelism, design patterns and .NET with C# and familiarising myself with some of the tooling we would be using (such as DevOps)"
                ]
            }
        ],
        skills: [
            { name: "Vue 3", type: "Framework", familiarity: "Expert" },
            { name: "CSS", type: "Language", familiarity: "Advanced" },
            { name: "SASS", type: "Language", familiarity: "Novice" },
            { name: "JavaScript", type: "Language", familiarity: "Advanced" },
            { name: "TypeScript", type: "Language", familiarity: "Intermediate" },
            { name: "C#", type: "Language", familiarity: "Advanced" },
            { name: "Visual Basic", type: "Language", familiarity: "Basic" },
            { name: ".NET Core 6", type: "Framework", familiarity: "Intermediate" },
            { name: "DevExpress + DevExtreme", type: "Library", familiarity: "Intermediate" },
            { name: "Bootstrap 5", type: "Library", familiarity: "Advanced" },
            { name: "Microsoft SQL Server", type: "Database", familiarity: "Intermediate" },
            { name: "Oracle DB", type: "Database", familiarity: "Intermediate" },
            { name: "DevOps", type: "Tool", familiarity: "Intermediate" },
            { name: "Git", type: "Tool", familiarity: "Advanced" },
            { name: "Yarn", type: "Tool", familiarity: "Intermediate" },
            { name: "npm", type: "Tool", familiarity: "Intermediate" },
            { name: "Vite", type: "Tool", familiarity: "Intermediate" }
        ],
        location: "Qormi (previously Mosta Technopark), Malta"
    },
    {
        company: "University of Malta",
        positions: [
            {
                title: "MITA Student Placement Programme Intern",
                type: "Internship",
                startDate: new Date("07/01/2021"),
                endDate: new Date("09/01/2021"),
                description: [
                    "Designed, implemented and maintained a website for clients using WordPress (acrmalta.com)",
                    "Maintained another WordPress website (ictprojects.mt)",
                    "Designed a course for programming students"
                ]
            }
        ],
        skills: [
            { name: "PHP", type: "Language", familiarity: "Novice" },
            { name: "HTML", type: "Language", familiarity: "Advanced" },
            { name: "CSS", type: "Language", familiarity: "Advanced" },
            { name: "FileZilla", type: "Tool", familiarity: "Intermediate" },
            { name: "WordPress", type: "Other", familiarity: "Intermediate" },
            { name: "Microsoft Office", type: "Other", familiarity: "Advanced" }
        ],
        location: "Msida, Malta"
    }
];

const testimonials: Array<Testimonial> = [
    {
        name: "Spinning Seal",
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero minima ex assumenda, doloribus quisquam accusantium provident iure itaque sequi placeat. Consectetur dignissimos consequuntur quasi nisi corrupti rerum nulla fugit.",
        workplace: "Megabyte Ltd."
    }
];

export { careerHistory, testimonials };
