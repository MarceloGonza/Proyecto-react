//Objetivo: se utiliza para memorizar una instancia de una función
//hace que un hijo no renderize

import { useState } from "react";

//Ejemplo:
//Tenes un número de teléfono al que llamas con frecuencia
//En vez de marcarlo continuamente lo vamos a almacenar en contactos
//Al menos que el número cambie, vamos a usar el mismo contacto

interface Contact {
  id: number;
  name: string;
  phone: number;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void; //método de llamado
}

const ContactCard = ({ contact, onCall }: ContactProps) => {
  console.log(`Renderizando contacto ${contact.name}`);

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Teléfono: {contact.phone}</p>
      <button onClick={() => contact.phone}>llamar</button>
    </div>
  );
};

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Manzana",
      phone: 123 - 456 - 7890,
    },
    {
      id: 2,
      name: "Pera",
      phone: 123 - 456 - 7890,
    },
    {
      id: 3,
      name: "Leche",
      phone: 123 - 456 - 7890,
    },
  ]);
};
