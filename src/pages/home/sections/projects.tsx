import CardProject from "../../../components/common/card-project.tsx";

interface Project {
    id: number;
    title: string;
    language: string;
    description: string;
    technologies: string[];
    hasCode: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Slashboard Desktop",
        language: "TypeScript",
        description: "A simple and convenient dashboard to monitor the activity and performance of your home servers.",
        technologies: [
            "typescript",
            "tailwind",
            "React"
        ],
        hasCode: false
    },
    {
        id: 2,
        title: "Lidar",
        language: "JavaScript",
        description: "A VR game about escaping a dark maze by scanning your surroundings.",
        technologies: [
            "typescript",
            "tailwind",
            "React"
        ],
        hasCode: false
    },
    {
        id: 3,
        title: "Amaze.me",
        language: "TypeScript",
        description: "A two-dimensional maze generator and visualizer in 3D space.",
        technologies: [
            "typescript",
            "tailwind",
            "React"
        ],
        hasCode: false
    },
    {
        id: 4,
        title: "Avatar",
        language: "TypeScript",
        description: "A modern SVG avatar generator for the web.",
        technologies: [
            "typescript",
            "tailwind",
            "React"
        ],
        hasCode: false
    },
    {
        id: 5,
        title: "Randomite",
        language: "TypeScript",
        description: "A basic gaussian random number generator with a modern chart visualiser.",
        technologies: [
            "typescript",
            "tailwind",
            "React"
        ],
        hasCode: false
    },
    {
        id: 6,
        title: "Light Engine",
        language: "Java",
        description: "An inverse rasterizer engine demo, written in java using swing.",
        technologies: [
            "typescript",
            "tailwind",
            "React"
        ],
        hasCode: false
    }
];

export const Projects = () => {
    return (
        <>
            <h2 className="text-2xl lg:text-4xl">Proyectos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                {projects.map((project) => (
                    <CardProject key={project.id} project={project}/>
                ))}
            </div>
        </>
    )
}