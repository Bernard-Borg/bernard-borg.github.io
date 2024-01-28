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
    fullTestimonial?: string;
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
        name: "Andrei Zammit",
        quote: "I am confident that Bernard Borg would be a tremendous asset to any organization seeking a skilled and dedicated software developer. His combination of technical expertise, teamwork, and commitment to excellence make him an outstanding candidate for any challenging software development role.",
        workplace: "Megabyte Team Lead",
        fullTestimonial: `
Bernard is an exceptional software engineer and a fine individual. I have had the pleasure of working closely with Bernard, and I can confidently attest to his outstanding technical skills, dedication, and professional demeanour.
<br/><br/>
Bernard has consistently demonstrated a deep understanding of software development principles and has a proven track record of delivering high-quality, scalable, and efficient software solutions. His expertise spans a wide range of technologies, including .NET and a range of front-end frameworks.
<br/><br/>
One of Bernard's standout qualities is his ability to approach complex problems with a strategic mindset. He has been instrumental in designing and implementing several critical components of high-end software projects, showcasing not only his technical prowess but also his analytical and problem-solving skills. Bernard's commitment to writing clean, maintainable code and his attention to detail have significantly contributed to the success of our development initiatives.
<br/><br/>
In addition to his technical competence, Bernard is an excellent team player who collaborates effectively with colleagues and stakeholders. He communicates clearly and concisely. This makes him an invaluable asset during project discussions, planning sessions, and team meetings. His positive attitude and willingness to take on challenges make him a pleasure to work with.
<br/><br/>
Bernard's contributions extend beyond his technical role. He is proactive in staying updated with industry trends and continuously seeks opportunities for professional development. His enthusiasm for learning and adopting new technologies ensures that development teams remain at the forefront of innovation. Furthermore, working with Bernard is fun! Even during the worst situations, when the team is down, he has always managed to lift the morale of the rest of the team.
<br/><br/>
I am confident that Bernard Borg would be a tremendous asset to any organization seeking a skilled and dedicated software developer. His combination of technical expertise, teamwork, and commitment to excellence make him an outstanding candidate for any challenging software development role.
<br/><br/>
#jahli #qedjghix
        `
    }
];

export { careerHistory, testimonials };
