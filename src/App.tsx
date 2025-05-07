import "./App.css";
import { useFetch } from "./../hooks/useFetch";

const url = "https://api.example.com/data";

function App() {
  const { data, error, loading } = useFetch(url);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>UPS! Hay un error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
