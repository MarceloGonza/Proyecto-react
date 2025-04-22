import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Marcelo");

  const countMore = () => {
    setCount((count) => count + 1);
  };

  const changeName = () => {
    setName("Gonzalez");
  };

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
      <p>{name}</p>
      <Button label="changeName" parentMethod={changeName} />
    </>
  );
}

export default App;
