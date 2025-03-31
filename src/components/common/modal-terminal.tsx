import { Modal } from "@mui/joy";
import { FaRegSquare } from "react-icons/fa";
import { BsTerminal } from "react-icons/bs";
import { useModalContext } from "../../global/contexts/modal-context";
import { Experiences } from "./experience.tsx";
import { Education } from "./education.tsx";
import { useState } from "react";

export default function ModalTerminal({ minimize }: { minimize?: () => void }) {
  const { isActive, toggleActive } = useModalContext();
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <>
      <button
        onClick={toggleActive}
        className="flex items-center justify-center w-[45px] text-xl  hover:bg-white/5"
      >
        <FaRegSquare className="text-[12px]" />
      </button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isActive}
        onClose={toggleActive}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="flex flex-col w-[98%] h-[98%] transition-all  border border-neutral-800 rounded-lg overflow-hidden">
          <div className="flex flex-row -h-[45px] bg-[#14151b] w-full">
            <div className="flex flex-row items-end w-full">
              <div className="flex flex-col items-center">
                <div className="flex flex-row justify-between items-center ml-[10px] relative bg-[#212029] w-[150px] lg:w-[250px] h-[30px] transition-all  py-[19px] px-3 rounded-t-lg">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <BsTerminal className="text-[14px]" />
                    <h4 className="text-[12px] hidden lg:block ">
                      Windows PowerShell
                    </h4>
                    <h4 className="text-[12px] block lg:hidden ">PowerShell</h4>
                  </div>
                  <button
                    onClick={toggleActive}
                    className="flex flex-col p-1 items-center justify-center w-6 h-6 hover:bg-white/5 rounded-full "
                  >
                    <p className="mb-1">x</p>
                  </button>
                  <span className="absolute bg-[#212029] bottom-0 -left-2 w-2 h-2">
                    <span className="block w-2 h-2 bg-[#14151b]  rounded-br-full " />
                  </span>
                  <span className="absolute bg-[#212029] bottom-0 -right-2 w-2 h-2">
                    <span className="block w-2 h-2 bg-[#14151b]  rounded-bl-full " />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row ">
              <button
                onClick={() => {
                  toggleActive();
                  if (minimize) minimize();
                }}
                className="flex items-center justify-center w-[45px] text-4xl hover:bg-white/5 pb-2"
              >
                -
              </button>
              <button
                onClick={toggleActive}
                className="flex items-center justify-center w-[45px] text-xl  hover:bg-white/5"
              >
                <FaRegSquare className="text-[12px]" />
              </button>
              <button
                onClick={toggleActive}
                className="flex items-center justify-center w-[45px] text-2xl  hover:bg-red-800 pb-2"
              >
                x
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full h-full bg-[#212029]">
            <div className="flex flex-col w-full pt-10 h-full bg-[#212029] overflow-auto">
              <div className="flex flex-row border-b m-3 border-gray-700">
                <button
                  className={`px-4 py-3 cursor-pointer ${activeTab === 0 ? "border-b border-blue-500 text-blue-500" : "text-gray-400"}`}
                  onClick={() => setActiveTab(0)}
                >
                  Experience
                </button>
                <button
                  className={`px-4 py-3 cursor-pointer ${activeTab === 1 ? "border-b border-blue-500 text-blue-500" : "text-gray-400"}`}
                  onClick={() => setActiveTab(1)}
                >
                  Education
                </button>
              </div>
              <div className="flex flex-col p-1">
                {activeTab === 0 && <Experiences />}
                {activeTab === 1 && <Education />}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
