import {BsTerminal} from "react-icons/bs";
import React, {useState} from "react";
import {motion} from "framer-motion";
import ModalTerminal from "./modal-terminal.tsx";
import {useModalContext} from "../../global/contexts/modal-context.tsx";
import {Experiences} from "./experience.tsx";
import {Education} from "./education.tsx";

const Terminal: React.FC = () => {
    const [minimizeTerminal, setMinimizeTerminal] = useState<boolean>(false);
    const [closeTerminal, setCloseTerminal] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number>(0);
    const {toggleActive} = useModalContext();

    const open = () => {
        toggleActive();
    };

    return (
        <>
            <div className="mb-10">
                <h2 className="text-2xl lg:text-4xl text-white">Experiencia | <span
                    className="text-[#3b82f6]">Educación</span></h2>
            </div>
            <div
                className={`flex flex-col w-full min-h-[600px] transition-all ease-in-out rounded-lg ${minimizeTerminal && 'bg-white/3  justify-center items-center'}`}>
                <h1 className={`text-2xl text-gray-500 ${minimizeTerminal ? 'block animate-pulse' : 'hidden'}`}>Terminal
                    Minimizada</h1>
                {!closeTerminal && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5, ease: "easeInOut"}}
                        className={`flex flex-col w-[100%] h-[600px] transition-all border border-neutral-800 rounded-lg overflow-hidden ${minimizeTerminal ? 'hidden' : ''}`}
                    >
                        <div className="flex flex-row h-[45px] bg-[#14151b] w-full">
                            <div className="flex flex-row items-end w-full">
                                <div className="flex flex-col items-center">
                                    <div
                                        className="flex flex-row relative justify-between items-center ml-[10px] relative bg-[#212029] w-[150px] lg:w-[250px] h-[30px] transition-all py-[19px] px-3 rounded-t-lg">
                                        <div className="flex flex-row items-center justify-center gap-2">
                                            <BsTerminal className="text-[14px]"/>
                                            <h4 className="text-[12px] hidden lg:block">Windows PowerShell</h4>
                                            <h4 className="text-[12px] block lg:hidden">PowerShell</h4>
                                        </div>
                                        <button
                                            onClick={() => setCloseTerminal(true)}
                                            className="flex flex-col p-1 items-center justify-center w-6 h-6 hover:bg-white/5 rounded-full"
                                        >
                                            <p className="mb-1">x</p>
                                        </button>
                                        <span className="bg-[#212029] absolute bottom-0 -right-3 w-3 h-3">
                                            <div className="w-full h-full bg-[#14151b] rounded-bl-lg"/>
                                        </span>
                                        <span className="bg-[#212029] absolute bottom-0 -left-3 w-3 h-3">
                                            <div className="w-full h-full bg-[#14151b] rounded-br-lg"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <button onClick={() => setMinimizeTerminal(true)}
                                        className="flex items-center justify-center w-[45px] text-4xl hover:bg-white/5 pb-2">-
                                </button>
                                <ModalTerminal minimize={() => setMinimizeTerminal(true)}/>
                                <button onClick={() => setCloseTerminal(true)}
                                        className="flex items-center justify-center w-[45px] text-2xl hover:bg-red-800 pb-2">x
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col w-full pt-10 h-full bg-[#212029] overflow-auto">
                            <div className="flex flex-row border-b m-3 border-gray-700">
                                <button
                                    className={`px-4 py-3 cursor-pointer ${activeTab === 0 ? 'border-b border-blue-500 text-blue-500' : 'text-gray-400'}`}
                                    onClick={() => setActiveTab(0)}
                                >
                                    Experiencia
                                </button>
                                <button
                                    className={`px-4 py-3 cursor-pointer ${activeTab === 1 ? 'border-b border-blue-500 text-blue-500' : 'text-gray-400'}`}
                                    onClick={() => setActiveTab(1)}
                                >
                                    Educación
                                </button>
                            </div>
                            <div className="flex flex-col p-1">
                                {activeTab === 0 && <Experiences/>}
                                {activeTab === 1 && <Education/>}
                            </div>
                        </div>
                    </motion.div>
                )}
                {minimizeTerminal && (
                    <motion.div
                        initial={{y: 50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: 50, opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        style={{zIndex: 999}}
                        className="bg-[#212029] fixed border-t border-l border-r border-neutral-700 bottom-0 left-10 flex flex-row gap-3 items-center justify-between pr-3 w-[300px] rounded-t-lg mt-20 cursor-pointer hover:bg-white/10 backdrop-blur-3xl"
                    >
                        <div className="flex flex-row items-center justify-center gap-1 p-2 w-full h-full"
                             onClick={() => {
                                 open();
                                 setMinimizeTerminal(false);
                             }}>
                            <BsTerminal className="text-[18px]"/>
                            Terminal
                        </div>
                        <button onClick={() => {
                            setMinimizeTerminal(false)
                        }}
                                className="flex flex-col p-1 items-center justify-center w-6 h-6 hover:bg-white/5 rounded-full">
                            <p className="mb-1">x</p>
                        </button>
                    </motion.div>
                )}
                {closeTerminal && (
                    <motion.div
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.8, opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        onClick={() => {
                            setCloseTerminal(false);
                        }}
                        className="bg-[#212029] flex flex-row gap-3 items-center justify-center p-3 w-[300px] h-[300px] rounded-lg mt-20 cursor-pointer hover:bg-white/20"
                    >
                        <BsTerminal className="text-[88px]"/>
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default Terminal;