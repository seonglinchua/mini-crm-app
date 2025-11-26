import { Link } from 'react-router-dom';
import { contacts } from '../data/contacts';
import './ContactList.css';

function ContactList() {
  return (
    <div className="contact-list-container">
      <h1>Contacts</h1>
      <div className="contact-list">
        {contacts.map((contact) => (
          <Link
            key={contact.id}
            to={`/contact/${contact.id}`}
            className="contact-card"
          >
            <div className="contact-avatar">
              {contact.name.charAt(0).toUpperCase()}
            </div>
            <div className="contact-info">
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-company">{contact.company}</p>
              <p className="contact-title">{contact.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
