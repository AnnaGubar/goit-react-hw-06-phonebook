import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createNewContact = (name, number) => {
    const createdContact = {
      id: nanoid(),
      name,
      number,
    };

    let existingContact = contacts.find(
      contact => transformValue(contact.name) === transformValue(name),
    );

    if (!contacts) {
      setContacts(createdContact);
    }

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      console.log('уже есть, пропускаю');
    }

    if (!existingContact) {
      console.log('новый, создаю');
      // setContacts([createdContact, ...contacts]);
      setContacts(prevState => [createdContact, ...prevState]);
    }
  };

  const getfilterValue = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = clickedContactId => {
    const updateContacts = contacts.filter(
      contact => contact.id !== clickedContactId,
    );
    setContacts(updateContacts);
  };

  const filterContacts = array => {
    return array.filter(arr =>
      transformValue(arr.name).includes(transformValue(filter)),
    );
  };

  const transformValue = value => value.toLowerCase().trim();

  return (
    <>
      <Section title="Phonebook">
        <ContactForm createNewContact={createNewContact} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} getfilterValue={getfilterValue} />

        <ContactList
          addedContacts={filterContacts(contacts)}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
}

export default App;
