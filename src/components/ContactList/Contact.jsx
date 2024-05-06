import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import css from './ContactList.module.css'


export default function Contact({
  contact: { name, number }
}) {
  return (
    <div className={css.container}>
      <ul className={css.contactList}>
        <span className={css.contactSpan}>
          <li className={css.contactItem}><IoPerson size="20" /></li>
          <li><p className={css.contactText}>{name}</p></li>
        </span>
        <span className={css.contactSpan}>
          <li className={css.contactItem}><FaPhone size="20" /></li>
          <li><p className={css.contactText}>{number}</p></li>
        </span>        
      </ul>
      
      <span className={css.contactBtnSpan}>
        <button className={css.contactBtn}>Delete</button>
      </span>
     
    </div>

  );
}

