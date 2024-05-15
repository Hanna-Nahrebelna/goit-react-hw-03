import { useEffect, useState } from 'react'

import ContactForm from '../ContactForm/ContactForm.jsx'
import SearchBox from '../SearchBox/SearchBox.jsx'
import ContactList from '../ContactList/ContactList.jsx'
import contacts from "../contacts.json"
  
import css from "./App.module.css"


export default function App() {  
  const [contactCards, setContactCards] = useState(contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem("saved-new-contact", JSON.stringify(contactCards));

    console.log("useEffect triggered");
    console.log("New contact cards:", contactCards);
  }, [contactCards]);
  
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
    setContactCards(prevContact => prevContact.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the values of form fields
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;

    console.log("Submitted name:", name);
    console.log("Submitted phone:", phone);

    // Check if you have entered name and phone number
    if (!name || !phone) {
      alert("Please fill in all fields");
      return;
    }

    // Create a new contact
    const newContact = { name, phone };

    // Add a new contact to your contact list
    addContacts(newContact);

    // Clean the form
    e.target.reset();
};

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
