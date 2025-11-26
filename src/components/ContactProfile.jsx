import { useParams, Link } from 'react-router-dom';
import { contacts } from '../data/contacts';
import './ContactProfile.css';

function ContactProfile() {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(id));

  if (!contact) {
    return (
      <div className="contact-profile-container">
        <div className="not-found">
          <h2>Contact Not Found</h2>
          <Link to="/" className="back-link">← Back to Contacts</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-profile-container">
      <Link to="/" className="back-link">← Back to Contacts</Link>
      
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {contact.name.charAt(0).toUpperCase()}
          </div>
          <h1 className="profile-name">{contact.name}</h1>
          <p className="profile-title">{contact.title}</p>
          <p className="profile-company">{contact.company}</p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">Email</span>
            <span className="detail-value">{contact.email}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone</span>
            <span className="detail-value">{contact.phone}</span>
          </div>
        </div>

        {contact.notes && (
          <div className="profile-notes">
            <h3>Notes</h3>
            <p>{contact.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactProfile;
