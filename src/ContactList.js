import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Functional Component - using because Just return a Render a UI
class ContactList extends Component {

    constructor(props) {
        super(props)
    }

    //typing the props of parent Component 
    static propTypes = {
        list: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

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
                    <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'> Remove </button>
                
                </li>)
            })}
        </ol>
    
        )
    }

}



export default ContactList;