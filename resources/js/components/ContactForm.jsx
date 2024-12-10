import React, { useState, useEffect } from 'react';

// function ContactForm({ onAdd }) {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         fetch('/api/contacts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ name, email, phone }),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 onAdd(data);
//                 setName('');
//                 setEmail('');
//                 setPhone('');
//             });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//             />
//             <button type="submit">Add Contact</button>
//         </form>
//     );
// }

// export default ContactForm;



function ContactForm({ contactToEdit, onAdd, onUpdate }) {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
    });

    // Si un contact à éditer est passé en prop, on le charge dans le formulaire
    useEffect(() => {
        if (contactToEdit) {
            setContact({
                name: contactToEdit.name,
                email: contactToEdit.email,
                phone: contactToEdit.phone,
            });
        }
    }, [contactToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Si un contact à éditer existe, on fait une requête de mise à jour
        if (contactToEdit) {
            fetch(`/api/contacts/${contactToEdit.id}`, {
                method: 'PUT', // ou PATCH selon votre choix
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact),
            })
                .then((response) => response.json())
                .then((updatedContact) => {
                    onUpdate(updatedContact); // Appeler onUpdate avec le contact mis à jour
                })
                .catch((error) => console.error('Error updating contact:', error));
        } else {
            // Sinon, on fait une requête pour ajouter un nouveau contact
            fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact),
            })
                .then((response) => response.json())
                .then((data) => {
                    onAdd(data); // Ajouter le nouveau contact
                    setContact({
                        name: '',
                        email: '',
                        phone: '',
                    }); // Réinitialiser le formulaire
                })
                .catch((error) => console.error('Error adding contact:', error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">
                {contactToEdit ? 'Update Contact' : 'Add Contact'}
            </button>
        </form>
    );
}

export default ContactForm;