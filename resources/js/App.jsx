/*
** Syntaxe le mieux 
*/
import React from 'react';
import { createRoot } from 'react-dom/client'; // Nouvelle API React 18
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importer React Router

//Appel des composants
import Menu from './components/Menu';
import Add from './components/Add';
// import Home from './components/Home';

// Créer des pages pour la navigation
function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function Services() {
    return <h2>Services Page</h2>;
}

function Contact() {
    return <h2>Contact Page</h2>;
}


function App() {
    return (
        <div>
            {/*<h1>Hello from React!</h1>*/}
            <Router>  {/* Enveloppe l'application avec le Router */}
                <Menu />  {/* Affiche le menu */}
                <Routes>  {/* Définit les routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

const container = document.getElementById('app'); // Récupération du conteneur
const root = createRoot(container); // Initialisation avec createRoot
root.render(<App />); // Utilisation de render via root