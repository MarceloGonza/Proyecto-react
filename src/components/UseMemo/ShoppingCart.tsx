//objetivo: memorizar (cache) el resultado de ejecutrar una función costosa,
// para evitar qye se vuelva a llamar el método
// Controlar si el beneficio de memorizar es superior al de calcularlo

import { useMemo, useState } from "react";

//Ej:
// Tenemos una lista de compras y ya calculaste el costo total de hacer toda la compra
//Si no agregamos ni cambiamos nada, cuál es el costo total?

interface Item {
  id: number;
  name: string;
  price: number;
}

export const ShoppingCart = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Manzana",
      price: 1.5,
    },
    {
      id: 2,
      name: "Pera",
      price: 2.0,
    },
    {
      id: 3,
      name: "Leche",
      price: 2.5,
    },
  ]);

  const [discount, setDiscount] = useState<number>(0);

  const totalCost = useMemo(
    () => items.reduce((total, item) => total + item.price, 0),
    [items]
  );

  const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Producto ${items.length + 1}`,
      price: Math.random() * 5,
    };

    setItems([...items, newItem]);
  };

  return (
    <div>
      <h2>Lista de compras</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <p>Costo total: ${totalCost.toFixed(2)}</p>
      <p>
        Descuento: $
        <input
          type="number"
          value={discount}
          placeholder="..."
          onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
        />
      </p>

      <p>Costo final: ${finalCost.toFixed(2)}</p>
      <button onClick={addItem}>Agregar Producto</button>
    </div>
  );
};
