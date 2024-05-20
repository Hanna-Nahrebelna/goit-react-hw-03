import { useEffect, useState } from 'react'

import ContactForm from '../ContactForm/ContactForm.jsx'
import SearchBox from '../SearchBox/SearchBox.jsx'
import ContactList from '../ContactList/ContactList.jsx'
import contacts from "../contacts.json"

import { v4 as uuidv4 } from 'uuid';
  
import css from "./App.module.css"


export default function App() {  
  const [contactCards, setContactCards] = useState(contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem("saved-new-contact", JSON.stringify(contactCards));
    console.log("useEffect triggered");
    console.log("New contact cards:", contactCards);
  }, [contactCards]);
  
  const addContact = (newContact) => {
    const contactWithId = { ...newContact, id: uuidv4() };
    setContactCards((prevContacts) => [...prevContacts, contactWithId]);
  };
  
  const deleteContact = (contactId) => {
    setContactCards((prevContact) => {
    return prevContact.filter(contact => contact.id !== contactId)
  });  
  };

  const visibleContacts = contactCards.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()));

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
