export type Project = {
    name: string;
    shortDescription?: string;
    previewImage?: string;
    liveLink?: string;
    githubLink?: string;
    learningOutcomes?: string[];
    downloadable?: boolean;
};

const projectsList: Project[] = [
    {
        name: "My Personal Website",
        liveLink: "https://bernard-borg.github.io",
        previewImage: "/images/Portfolio.png",
        learningOutcomes: ["Vue", "Pinia", "JavaScript", "Typescript", "SASS", "Audacity"]
    },
    {
        name: "SudokuApp",
        liveLink: "https://bernard-borg.github.io/SudokuApp",
        githubLink: "https://github.com/Bernard-Borg/SudokuApp",
        previewImage: "/images/SudokuApp.png",
        learningOutcomes: ["Vite", "Vue", "Typescript"]
    },
    {
        name: "SoundboardApp",
        liveLink: "https://github.com/Bernard-Borg/SoundboardApp/releases/",
        githubLink: "https://github.com/Bernard-Borg/SoundboardApp",
        previewImage:
            "https://private-user-images.githubusercontent.com/35971384/268380233-02f34d1e-5588-45bc-aef1-5a4f68e99ac0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY0NjkwNDgsIm5iZiI6MTcwNjQ2ODc0OCwicGF0aCI6Ii8zNTk3MTM4NC8yNjgzODAyMzMtMDJmMzRkMWUtNTU4OC00NWJjLWFlZjEtNWE0ZjY4ZTk5YWMwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI4VDE5MDU0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRlYWY4OGYxYmJhN2YzYTU3Zjk4YTkzOWYyNGY2ODk5YjllNGFlZjE2ZThiMzc3NGVlZGY3ZmY1NmVmZGY3YWImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Tdzdk2RRujcAUE7n5MUR5tyteJgWSmC5RObHCJPAAeU",
        downloadable: true,
        learningOutcomes: [
            "JavaScript",
            "HTML 5",
            "CSS",
            "electron-forge",
            "Electron",
            "Tauri",
            "TailwindCSS",
            "Open Source"
        ]
    },
    {
        name: "VideoVish",
        liveLink: "https://videovish.vercel.app/",
        previewImage:
            "https://private-user-images.githubusercontent.com/35971384/300260616-ccc4faa1-98e5-463f-98a0-15dbd70ec801.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY0Njk0MjYsIm5iZiI6MTcwNjQ2OTEyNiwicGF0aCI6Ii8zNTk3MTM4NC8zMDAyNjA2MTYtY2NjNGZhYTEtOThlNS00NjNmLTk4YTAtMTVkYmQ3MGVjODAxLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI4VDE5MTIwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNkNDQ1ZWQwZmUzMWEwNDY0OWI3MjU3OTcxMTBkZjdkNTkxMjY1NWU0MzE5YThhNzlkNzRjZTExMzEwOTQ1MjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.k5GjZ5ppVqgYVPP4UsDYnvCH-f6Dyhm8lpT41YsV3Cw",
        downloadable: true,
        githubLink: "https://github.com/Bernard-Borg/VideoVish",
        learningOutcomes: [
            "JavaScript",
            "HTML 5",
            "CSS",
            "Github Actions",
            "Open Source",
            "Electron",
            "electron-builder",
            "Tauri",
            "TailwindCSS",
            "Vue",
            "Typescript",
            "Nuxt",
            "Vercel"
        ]
    }
];

export default projectsList;
