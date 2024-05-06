import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import css from './ContactList.module.css'


export default function Contact({
  contact: { name, number }
}) {
  return (
    <div className={css.contactList}>
      <span className={css.contactItem}><IoPerson size="24" /></span>
      <p className={css.contactText}>{name}</p>
      
      <span className={css.contactItem}><FaPhone size="24" /></span>
      <p className={css.contactText}>{number}</p>

      <button>Delete</button>
    </div>

  );
}

