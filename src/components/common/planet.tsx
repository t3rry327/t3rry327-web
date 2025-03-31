import {motion} from "framer-motion";

export const Planet = () => {
    return (
        <>
            <div className="absolute top-0 w-full">
                <div className="relative flex flex-col h-[800px] overflow-x-hidden">
                    <div
                        className="absolute shadow-[0_0_55px_10px_rgba(59,130,241,0.5),_inset_0_0_55px_10px_rgba(59,130,241,0.5)] -top-40 sm:-top-50 lg:-top-100 left-6 sm:left-60 lg:left-140 xl:left-230 transition-all ease-in-out duration-1000 rounded-full overflow-hidden">
                        <motion.div
                            className="rounded-full"
                            animate={{rotate: 360}}
                            transition={{repeat: Infinity, duration: 200, ease: "linear"}}
                        >
                            <img src="./planet_dark.webp" alt="asd"
                                 className="min-w-[200px] min-h-[200px] sm:min-w-[500px] sm:min-h-[500px] lg:min-w-[800px] lg:min-h-[800px] opacity-60 transition-all ease-in-out duration-1000"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}