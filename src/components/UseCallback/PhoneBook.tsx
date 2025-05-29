//Objetivo: se utiliza para memorizar una instancia de una función
//hace que un hijo no renderize

import { memo, useCallback, useState } from "react";

//Ejemplo:
//Tenes un número de teléfono al que llamas con frecuencia
//En vez de marcarlo continuamente lo vamos a almacenar en contactos
//Al menos que el número cambie, vamos a usar el mismo contacto

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void; //método de llamado
}

const ContactCard = memo(({ contact, onCall }: ContactProps) => {
  console.log(`Renderizando contacto ${contact.name}`);

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Teléfono: {contact.phone}</p>
      <button onClick={() => onCall(contact.name)}>Llamar</button>
    </div>
  );
});

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Rosa",
      phone: "123 - 456 - 7890",
    },
    {
      id: 2,
      name: "Pedro",
      phone: "123 - 456 - 7890",
    },
    {
      id: 3,
      name: "Lio",
      phone: "123 - 456 - 7890",
    },
  ]);

  const [log, setLog] = useState<string>("");

  const makeCall = useCallback(
    (name: string) => setLog(`Llamando al ${name}`),
    []
  );

  const addContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: `Contacto ${contacts.length + 1}`,
      phone: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
    };

    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h2>Agenda de Contacto</h2>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
      ))}
      <button onClick={addContact}>Agregar Contacto</button>
      <p>{log}</p>
    </div>
  );
};
