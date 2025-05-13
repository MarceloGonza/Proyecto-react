import "./App.css";
import { AppForm, Button, ColorRed } from "./components";

function App() {
  // validaciones
  // submit

  const submit = () => {
    console.log("submitted");
  };

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
      <AppForm>
        <button type="submit" onClick={submit}>
          Hola
        </button>
      </AppForm>
    </>
  );
}

export default App;
