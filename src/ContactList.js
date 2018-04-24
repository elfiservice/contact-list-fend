import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ContactList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            valueInputSearch: ''
        }

        // this.handleQuery = this.handleQuery.bind(this);
    }

    //typing the props of parent Component 
    static propTypes = {
        list: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    handleQuery(newQuery) {
        this.setState({ valueInputSearch: newQuery.trim() })
    }

    render() {
        const { list, onDeleteContact } = this.props;
        const { valueInputSearch } = this.state;

        let showingContacts;
        //filterig contacts
        if(valueInputSearch) {
            const match = new RegExp(escapeRegExp(valueInputSearch), 'i');
            showingContacts = list.filter( contact => match.test(contact.name) );
        } else {
            showingContacts = list;
        }

        //sorting contacts
        showingContacts.sort(sortBy('name'));

        return (

            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input 
                        className="search-contacts"
                        type="text"
                        placeholder="Search a contact"
                        value={valueInputSearch}
                        onChange={(event) => this.handleQuery(event.target.value)}
                    />
                </div>

                <ol className="contact-list">
                    {showingContacts.map((contact) => {
                        return (<li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }} />
                            <div className='contact-details'> 
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={() => onDeleteContact(contact)} className='contact-remove'> Remove </button>
                        
                        </li>)
                    })}
                </ol>
            </div>


    
        )
    }

}



export default ContactList;