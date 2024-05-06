import Contact from '../ContactList/Contact.jsx';
import css from './ContactList.module.css'

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li className={css.contactList} key={contact.id}>
            <Contact contact={contact} />
          </li>)
        )}
        
      </ul>
    </div>
    
  );
}

export default ContactList