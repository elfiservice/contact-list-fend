import React, { Component } from 'react';

class ContactList extends Component {
    

    render() {
        const listContacts = this.props.list;
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
}

export default ContactList;