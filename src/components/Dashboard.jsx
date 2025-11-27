import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contacts } from '../data/contacts';
import './Dashboard.css';

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate statistics
  const totalContacts = contacts.length;
  const uniqueCompanies = [...new Set(contacts.map(c => c.company))].length;
  const contactsWithNotes = contacts.filter(c => c.notes && c.notes.trim().length > 0).length;

  // Get recent contacts (first 3 from the list - in a real app, this would be sorted by date)
  const recentContacts = contacts.slice(0, 3);

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>CRM Dashboard</h1>
        <p className="dashboard-subtitle">Manage your contacts and relationships</p>
      </header>

      {/* Statistics Cards */}
      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-icon contacts-icon">👥</div>
          <div className="stat-content">
            <span className="stat-number">{totalContacts}</span>
            <span className="stat-label">Total Contacts</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon companies-icon">🏢</div>
          <div className="stat-content">
            <span className="stat-number">{uniqueCompanies}</span>
            <span className="stat-label">Companies</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon active-icon">📝</div>
          <div className="stat-content">
            <span className="stat-number">{contactsWithNotes}</span>
            <span className="stat-label">With Notes</span>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/contacts" className="action-btn primary">
            <span className="action-icon">📋</span>
            <span>View All Contacts</span>
          </Link>
          <button className="action-btn secondary" disabled title="Coming soon">
            <span className="action-icon">➕</span>
            <span>Add Contact</span>
          </button>
          <button className="action-btn secondary" disabled title="Coming soon">
            <span className="action-icon">📤</span>
            <span>Export Data</span>
          </button>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <h2>Search Contacts</h2>
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by name, company, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button 
              className="clear-btn" 
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        {searchQuery && (
          <div className="search-results">
            <p className="results-count">
              Found {filteredContacts.length} contact{filteredContacts.length !== 1 ? 's' : ''}
            </p>
            {filteredContacts.length > 0 ? (
              <div className="results-list">
                {filteredContacts.map((contact) => (
                  <Link
                    key={contact.id}
                    to={`/contact/${contact.id}`}
                    className="result-item"
                  >
                    <div className="result-avatar">
                      {contact.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="result-info">
                      <span className="result-name">{contact.name}</span>
                      <span className="result-company">{contact.company}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="no-results">No contacts found matching your search.</p>
            )}
          </div>
        )}
      </section>

      {/* Recent Contacts */}
      <section className="recent-section">
        <div className="section-header">
          <h2>Recent Contacts</h2>
          <Link to="/contacts" className="view-all-link">View All →</Link>
        </div>
        <div className="recent-list">
          {recentContacts.map((contact) => (
            <Link
              key={contact.id}
              to={`/contact/${contact.id}`}
              className="recent-card"
            >
              <div className="recent-avatar">
                {contact.name.charAt(0).toUpperCase()}
              </div>
              <div className="recent-info">
                <h3 className="recent-name">{contact.name}</h3>
                <p className="recent-title">{contact.title}</p>
                <p className="recent-company">{contact.company}</p>
              </div>
              <span className="recent-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
