import { createContext, ReactNode, useContext, useState } from "react";

export const ModaltContext = createContext<{
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  state: false,
  setState: () => null,
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <ModaltContext.Provider value={{ state, setState }}>
      {children}
    </ModaltContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModaltContext);

  if (!context) {
    throw new Error("Modal is being used outside it's provider");
  }

  return context;
};
