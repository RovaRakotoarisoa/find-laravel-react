//Appel du fichier menu.css
import '../../css/menu.css';

import { Link } from 'react-router-dom';
import React from 'react';

function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>  {/* Lien vers la page Home */}
                <li><Link to="/about">About</Link></li>  {/* Lien vers la page About */}
                <li><Link to="/services">Services</Link></li>  {/* Lien vers la page Services */}
                <li><Link to="/contact">Contact</Link></li>  {/* Lien vers la page Contact */}
                <li><Link to="/add">add</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;