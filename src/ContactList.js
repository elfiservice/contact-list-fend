import React, { Component } from 'react';

class ContactList extends Component {
    

    render() {
        const listContacts = this.props.list;
        return (
            <ol className="contact-list">
                {listContacts.map((contact, index) => {
                    return (<li key={contact.id}>{contact.name}</li>)
                })}
            </ol>

        )
    }
}

export default ContactList;