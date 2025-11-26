# Mini CRM App

A simple CRM (Customer Relationship Management) front-end application built with React and Vite.

## Features

- **Contact List View**: Display all contacts with their name, company, and job title
- **Contact Profile View**: View detailed information about each contact including email, phone, and notes
- **Responsive Design**: Works well on both desktop and mobile devices
- **Dark Mode Support**: Automatically adapts to system color scheme preferences

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── ContactList.jsx     # Contact list component
│   ├── ContactList.css     # Contact list styles
│   ├── ContactProfile.jsx  # Contact profile component
│   └── ContactProfile.css  # Contact profile styles
├── data/
│   └── contacts.js         # Sample contact data
├── App.jsx                 # Main app with routing
├── App.css                 # App styles
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Technologies Used

- React 19
- React Router DOM
- Vite
- ESLint
