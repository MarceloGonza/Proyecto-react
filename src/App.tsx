import "./App.css";
import { Modal } from "./components";
import { useModalContext } from "./components/Modal/Context/ModalContext";

function App() {
  const { setState } = useModalContext();

  const openModal = () => {
    setState(true);
  };
  return (
    <>
      <Modal>
        <h2>Hola</h2>
        <h3>Mundo</h3>
      </Modal>
      <button onClick={openModal}>Ábrete Sésamo</button>
    </>
  );
}

export default App;
