import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'> Remove </button>
            
            </li>)
        })}
    </ol>

    )
}

//typing the props of parent Component 
ContactList.propTypes = {
    list: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;