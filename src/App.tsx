import "./App.css";
import { Button, ColorRed } from "./components";

function App() {
  const handleClick = () => {
    console.log("uy me clickeo todo");
  };

  const dimeHola = () => {
    alert("Hola !!");
  };

  return (
    <>
      <ColorRed>
        <Button parentMethod={dimeHola}>My Boton Rojo</Button>
      </ColorRed>
      <Button parentMethod={handleClick}>My Boton Normal</Button>
    </>
  );
}

export default App;
