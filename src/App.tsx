import "./App.css";
import { getCharacter } from "./../services/api.service";
import { useEffect, useState } from "react";
import { Character, emptyChatacter } from "./models";

function App() {
  const [data, setData] = useState<Character>(emptyChatacter);

  const fetchMorty = async () => {
    const result = await getCharacter(1);
    setData(result.data);
  };

  useEffect(() => {
    fetchMorty();
  }, []);

  return <>{JSON.stringify(data)}</>;
}

export default App;
