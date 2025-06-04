import { createContext } from "react";

export const ModaltContext = createContext<{
  state: boolean;
  setState: any;
}>({
  state: false,
  setState: () => null,
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = setState<boolean>(false);

  return (
    <ModaltContext.Provider value={{ state, setState }}>
      {children}
    </ModaltContext.Provider>
  );
};
