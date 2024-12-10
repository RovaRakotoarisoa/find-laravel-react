// import React, { useEffect, useState } from 'react';

// function ContactList() {
//     const [contacts, setContacts] = useState([]);

//     useEffect(() => {
//         fetch('/api/contacts')
//             .then(response => response.json())
//             .then(data => setContacts(data));
//     }, []);

//     return (
//         <div>
//             <h2>Contacts</h2>
//             <ul>
//                 {contacts.map(contact => (
//                     <li key={contact.id}>
//                         {contact.name} - {contact.email} - {contact.phone}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ContactList;


import React from 'react';

function ContactList({ contacts }) {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id} className="text-blue-500">
                        {contact.name} - {contact.email} - {contact.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;