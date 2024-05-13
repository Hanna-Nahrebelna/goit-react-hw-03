import { useState } from 'react'

import ContactForm from '../ContactForm/ContactForm.jsx'
import SearchBox from '../SearchBox/SearchBox.jsx'
import ContactList from '../ContactList/ContactList.jsx'
import contacts from "../contacts.json"
  
import css from "./App.module.css"


export default function App() {  
  const [contactCards, setContactCards] = useState(contacts);
  const [filter, setFilter] = useState('');
  
  // we will pass this function to the component ContactForm, 
  // so that when the form is submitted, 
  // it will be called and the surrounding value of the form text field
  // (i.e.the data entered by the user) will be passed here.
  const addContacts = (newContact) => {
  // The value of the contacts object at the time of update

    // this function synchronises the state and updates the form
    setContactCards((prevContact) => { 
      return [...prevContact, newContact];
    })
 }
  
  // a function responsible for clearing the form after submission
  const deleteContact = (contactId) => {
    setContactCards(prevContact => {
      return prevContact.filter((contact) => contactId.id !== contactId);
    })
  };

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()));

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
