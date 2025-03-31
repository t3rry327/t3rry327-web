import { createContext, useState, ReactNode, useContext } from "react";

interface MyContextType {
  isActive: boolean;
  toggleActive: () => void;
}

const ModalContext = createContext<MyContextType | undefined>(undefined);

export const ModalContextProvider  = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ isActive, toggleActive }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error("useMyContext debe usarse dentro de MyProvider");
    }
    return context;
  };