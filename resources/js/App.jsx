/*
** Syntaxe le mieux 
*/
// import React from 'react';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'; // Nouvelle API React 18
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importer React Router
import { StrictMode } from 'react';

//Appel des composants
import Menu from './components/Menu';
import Add from './components/Add';

import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

// import Home from './components/Home';

// Créer des pages pour la navigation
// function Home() {
//     return <h2>Home Page</h2>;
// }

// function About() {
//     return <h2>About Page</h2>;
// }

// function Services() {
//     return <h2>Services Page</h2>;
// }

// function Contact() {
//     return <h2>Contact Page</h2>;
// }


function App() {
    // return (
    //     <div>
    //         {/*<h1>Hello from React!</h1>*/}
    //         <Router>  {/* Enveloppe l'application avec le Router */}
    //             <Menu />  {/* Affiche le menu */}
    //             <Routes>  {/* Définit les routes */}
    //                 <Route path="/" element={<Home />} />
    //                 <Route path="/about" element={<About />} />
    //                 <Route path="/services" element={<Services />} />
    //                 <Route path="/add" element={<Add />} />
    //                 <Route path="/contact" element={<Contact />} />
    //             </Routes>
    //         </Router>
    //     </div>
    // );
    //1er code 
    // const [contacts, setContacts] = useState([]);

    // const handleAddContact = (contact) => {
    //     setContacts([...contacts, contact]);
    // };



    // const [contacts, setContacts] = useState([]);

    // // Récupérer les contacts au chargement du composant
    // useEffect(() => {
    //     fetch('/api/contacts')
    //         .then(response => response.json())
    //         .then(data => setContacts(data));
    // }, []);

    // const handleAddContact = (contact) => {
    //     setContacts([...contacts, contact]);
    // };

    const [contacts, setContacts] = useState([]);
    const [contactToEdit, setContactToEdit] = useState(null);

    useEffect(() => {
        fetch('/api/contacts')
            .then((response) => response.json())
            .then((data) => setContacts(data));
    }, []);

    const handleAddContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    const handleUpdateContact = (updatedContact) => {
        setContacts(
            contacts.map((contact) =>
                contact.id === updatedContact.id ? updatedContact : contact
            )
        );
        setContactToEdit(null); // Réinitialiser l'édition après mise à jour
    };

    const handleEditContact = (contact) => {
        setContactToEdit(contact); // Charger le contact à éditer dans le formulaire
    };

    return (
        <div>
            <h1>Contact Manager</h1>
            <ContactForm contactToEdit={contactToEdit} onAdd={handleAddContact} onUpdate={handleUpdateContact} />
            <ContactList contacts={contacts} onEdit={handleEditContact} />
        </div>
    );
}

const container = document.getElementById('app'); // Récupération du conteneur
const root = createRoot(container); // Initialisation avec createRoot
root.render(
            <StrictMode>
                <App />
            </StrictMode>
            ); // Utilisation de render via root
