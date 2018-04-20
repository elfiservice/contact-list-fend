import React, { Component } from 'react';

//Functional Component - using because Just return a Render a UI
function ContactList(props) {
    const listContacts = props.list;
    return (
        <ol className="contact-list">
        {listContacts.map((contact) => {
            return (<li key={contact.id} className='contact-list-item'>
                <div className='contact-avatar' style={{
                    backgroundImage: `url(${contact.avatarURL})`
                }} />
                <div className='contact-details'> 
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                </div>
                <button className='contact-remove'> Remove </button>
            
            </li>)
        })}
    </ol>

    )
}


export default ContactList;