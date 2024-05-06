// import { useState, useEffect } from 'react'
// import { Formik } from 'formik';

// import ContactForm from '../ContactForm/ContactForm.jsx'
// import SearchBox from '../SearchBox/SearchBox.jsx'
import ContactList from '../ContactList/ContactList.jsx'
import contacts from "../contacts.json"
  
import css from "./App.module.css"



export default function App() {
  // const [contacts, setContacts] = useState(() => {

  // })

  // useEffect(() => {}, [])

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList contacts={contacts} />
    </div>
  );
}

