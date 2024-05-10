import Contact from '../ContactList/Contact.jsx';
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li className={css.contactList} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>)
        )}        
      </ul>
    </div>
    
  );
}

export default ContactList