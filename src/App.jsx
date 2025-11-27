import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ContactList from './components/ContactList';
import ContactProfile from './components/ContactProfile';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/mini-crm-app">
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
