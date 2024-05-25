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
        githubLink: "https://github.com/Bernard-Borg/bernard-borg.github.io",
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
        name: "Sonicity",
        liveLink: "https://github.com/Bernard-Borg/Sonicity/releases/",
        githubLink: "https://github.com/Bernard-Borg/Sonicity",
        previewImage: "/images/SoundboardApp.png",
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
        previewImage: "/images/VidVish.png",
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
