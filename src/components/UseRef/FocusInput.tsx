import { useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const HandleButtonClick = () => {
    if (!inputRef.current) {
      console.log("No existe la referencia al elemento");
      return;
    }

    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escriba algo aqui..." />
      <button onClick={HandleButtonClick}>Enfocar en el input</button>
    </div>
  );
};
