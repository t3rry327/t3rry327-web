interface Project {
    id: number;
    title: string;
    language: string;
    description: string;
    technologies: string[];
}

export default function CardProject({project}: { project: Project }) {
    return (
        <>
            <div
                className="bg-[#212029] hover:bg-white/80 hover:text-black backdrop-blur-3xl border border-neutral-800 flex flex-col justify-between p-4 rounded-lg shadow-lg hover:scale-101 transition-all text-gray-300">
                <h2 className="text-xl font-bold mb-2 ">{project.title}</h2>
                <p className="text-sm  mb-2 ">{project.language}</p>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="text-sm">{project.technologies.map((tech, index) => (
                    <span key={index} className="bg-black/20 px-2 py-1 rounded mr-1">{tech}</span>
                ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                    <br/>
                    <div className="flex items-center gap-3">
                        <a href="/">Code</a>
                        <a href="/">View</a>
                    </div>
                </div>
            </div>
        </>
    )
}