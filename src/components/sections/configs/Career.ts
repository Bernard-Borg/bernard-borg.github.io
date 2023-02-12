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
    signature?: string;
};

export type Skill = {
    name: string;
    type: "Language" | "Library" | "Framework" | "Tool" | "API" | "Database" | "Other";
};

export type CareerRecord = {
    company: string;
    positions: Array<CareerPosition>;
    skills?: Array<Skill>;
    location?: string;
    testimonials?: Array<Testimonial>;
};

const careerHistory: CareerRecord[] = [
    {
        company: "Megabyte Ltd.",
        positions: [
            {
                title: "Junior Software Developer",
                type: "Full-time",
                startDate: new Date("09/01/2022"),
                description: [
                    "Maintained a legacy codebase written in VB.NET and another legacy system written in .NET Framework 4 (C#)",
                    "Added new features and performed refactoring on an ongoing Vue + .NET 6 project",
                    "Added new features to a PWA mobile application written in JavaScript",
                    "Designed, implemented and documented (through DevOps) the front-end of a large-scale project (Vue 3 + Vite + Pinia + Typescript + Bootstrap 5 + SASS) and assisted in the design and implementation of the back-end (.NET + C#) and its integration with the front-end and an Oracle database",
                    "Created wireframes using Figma",
                    "Created a large number of Vue components from scratch and adjusted existing ones",
                    "Was part of multiple projects using an Agile approach, extensively using tools such as DevOps and Git",
                    "Met with clients to clarify requirements for the design of the system"
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
            { name: "Vue 3", type: "Framework" },
            { name: "CSS", type: "Language" },
            { name: "SASS", type: "Language" },
            { name: "JavaScript", type: "Language" },
            { name: "TypeScript", type: "Language" },
            { name: "C#", type: "Language" },
            { name: "Visual Basic", type: "Language" },
            { name: ".NET Core 6", type: "Framework" },
            { name: "DevExpress + DevExtreme", type: "Library" },
            { name: "Bootstrap 5", type: "Library" },
            { name: "Microsoft SQL Server", type: "Database" },
            { name: "DevOps", type: "Tool" },
            { name: "Git", type: "Tool" },
            { name: "Yarn", type: "Tool" },
            { name: "npm", type: "Tool" },
            { name: "Vite", type: "Tool" }
        ],
        location: "Mosta Technopark, Malta"
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
            { name: "PHP", type: "Language" },
            { name: "HTML", type: "Language" },
            { name: "CSS", type: "Language" },
            { name: "FileZilla", type: "Tool" },
            { name: "WordPress", type: "Other" },
            { name: "Microsoft Office", type: "Other" }
        ],
        location: "Msida, Malta"
    }
];

export default careerHistory;
