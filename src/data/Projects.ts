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
        githubLink: "https://github.com/Bernard-Borg/SoundboardApp",
        learningOutcomes: ["JavaScript", "Electron", "HTML 5", "CSS", "electron-forge", "Open Source"]
    },
    {
        name: "VideoVish",
        liveLink: "https://github.com/Bernard-Borg/VideOVish/releases",
        previewImage: "/images/VideoVish.png",
        downloadable: true,
        githubLink: "https://github.com/Bernard-Borg/VideoVish",
        learningOutcomes: [
            "JavaScript",
            "Electron",
            "HTML 5",
            "CSS",
            "electron-builder",
            "Github Actions",
            "Open Source"
        ]
    }
];

export default projectsList;
