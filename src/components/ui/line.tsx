import { motion } from "framer-motion";
import React from "react";


export const LineTopButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex flex-col relative h-[80px] mt-40">
                <div className=" absolute left-0 top-0 border-t-2 border-l-2 border-[#3b82f6] rounded-tl-[60px] h-[80px] w-[80px] " />
                <div className="absolute flex flex-col justify-center -top-[40px] left-[80px] flex flex-col border-2 border-[#3b82f6] bg-[#3b82f6]/10 backdrop-blur-3xl h-[80px] rounded-[80px] w-[75%] sm:max-w-[350px] cursor-pointer p-3 transition-shadow duration-300 hover:shadow-[0_0_50px_6px_rgba(59,130,241,0.5),_inset_0_0_35px_10px_rgba(59,130,241,0.4)]">
                    {children}
                </div>
            </div>
        </>
    )
};

export const LineVerticalRight = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex flex-col min-h-[70vh] relative mt-[18px]">
                <motion.div
                    className="absolute right-0 top-0 h-full w-[2px]"
                    style={{
                        background: "linear-gradient(to bottom, #00df56,#a71900, #5f00b800)",
                    }}
                />
                {children}
            </div>
        </>
    )
};

export const LineVerticalLeft = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex flex-col min-h-[70vh] relative">
                <motion.div
                    className="absolute left-0 top-0 h-full w-[2px]"
                    style={{
                        background: "linear-gradient(to bottom, #3b82f6, #5f00b8, #dfc800)",
                    }}
                />
                {children}
            </div>
        </>
    )
};

export const LineHorizontal = () => {
    return (
        <>
            <div className="flex flex-row w-full ">
                <div className="flex flex-row relative w-[80px] h-[80px]">
                    <div className=" absolute left-0 top-0 border-b-2 border-l-2 border-[#dfc800] rounded-bl-[60px] h-[80px] w-[80px] " />
                </div>
                <div className="relative flex flex-col w-full">
                    <motion.div
                        className="absolute bottom-0 w-full h-[2px]"
                        style={{
                            background: "linear-gradient(to right, #dfc800, #00df56)",
                        }}
                    />
                </div>
                <div className="flex flex-row relative h-[80px] w-[80px] ">
                    <div className=" absolute right-0 -bottom-[78px] border-t-2 border-r-2 border-[#00df56] rounded-tr-[60px] h-[80px] w-[80px] " />
                </div>
            </div>
            <div className="flex flex-row w-full ">
                <div className="flex flex-row relative w-[80px] h-[80px]">
                    <div className=" absolute left-0 -top-15 border-b-2 border-l-2 border-[#dfc800] rounded-bl-[60px] h-[80px] w-[80px] " />
                </div>
                <div className="relative flex flex-col w-full">
                    <motion.div
                        className="absolute bottom-15 w-full h-[2px]"
                        style={{
                            background: "linear-gradient(to right, #dfc800, #00df56)",
                        }}
                    />
                </div>
                <div className="flex flex-row relative h-[80px] w-[80px] ">
                    <div className=" absolute right-0 -bottom-[18px] border-t-2 border-r-2 border-[#00df56] rounded-tr-[60px] h-[80px] w-[80px] " />
                </div>
            </div>
        </>
    )
};

