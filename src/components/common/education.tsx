import {motion} from "framer-motion";

const education = [
    {
        id: 1,
        title: "I.P.F.L.B. - E.E.S.T Nº5 — Técnico informático",
        institution: "",
        period: "",
        description: [
            "3 años en el Instituto Privado Fray Luis Beltrán - Los años siguientes en la Escuela de Educación Técnica 5."
        ]
    },
    {
        id: 2,
        title: "FORMACIÓN AUTODIDACTA",
        institution: "",
        period: "",
        description: [
            "He adquirido conocimientos en JavaScript, TypeScript, HTML5, CSS3, React y Next.js de forma autodidacta, desarrollando aplicaciones web dinámicas y escalables.",
            "Utilizo Tailwind CSS y Framer Motion para crear interfaces atractivas e interactivas, manejo Git y Webpack para optimizar el flujo de trabajo.",
            "También aplico principios de diseño responsive y accesibilidad para garantizar una excelente experiencia de usuario en cualquier dispositivo."
        ]
    }
];

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
};

export const Education = () => (
    <div className="p-2 lg:p-6 font-thin">
        <motion.div className="relative" variants={containerVariants} initial="hidden" animate="visible">
            {education.map((edu) => (
                <motion.div key={edu.id} className="relative mb-5" variants={itemVariants}>
                    <div className="flex items-start">
                        <div className="md:ml-6 border-b border-t border-white/5 p-6 rounded-xl flex-1 hover:border-white/20 transition-colors duration-500">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                            </div>
                            {edu.description.map((text, index) => (
                                <p key={index} className="text-gray-300 mb-2">{text}</p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div>
);