import "./App.css";
import { AppForm, Button, ColorRed } from "./components";
import { GlobalProvider } from "./../context/global.provider";

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
    <GlobalProvider>
      <ColorRed>
        <Button parentMethod={dimeHola}>My Boton Rojo</Button>
      </ColorRed>
      <Button parentMethod={handleClick}>My Boton Normal</Button>

      <AppForm>
        <button type="submit" onClick={submit}></button>
      </AppForm>
    </GlobalProvider>
  );
}

export default App;
