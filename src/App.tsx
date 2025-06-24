import "./App.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function App({ children }: Props) {
  return (
    <>
      <p>Navbar</p>
      {children}
      <p>footer</p>
    </>
  );
}

export default App;
