import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ContactList extends Component {
    //typing the props of parent Component 
    static propTypes = {
        list: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        valueInputSearch: ''
    }

    handleQuery = (newQuery) => {
        this.setState({
            valueInputSearch: newQuery.trim()
        })
    }

    render() {
        const listContacts = this.props.list;
        const stateValueInputSearch = this.state.valueInputSearch;
        let showingContacts;
        //filterig contacts
        if(stateValueInputSearch) {
            const match = new RegExp(escapeRegExp(stateValueInputSearch), 'i');
            showingContacts = listContacts.filter( contact => match.test(contact.name) );
        } else {
            showingContacts = listContacts;
        }

        //sorting contacts
        showingContacts.sort(sortBy('name'));

        return (
            <div className="list-contacts">
                {JSON.stringify(this.state)}
                <div className="list-contacts-top">
                    <input 
                        className="search-contacts"
                        type="text"
                        placeholder="Search a contact"
                        value={this.state.valueInputSearch}
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
                            <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'> Remove </button>
                        
                        </li>)
                    })}
                </ol>
            </div>


    
        )
    }
}




export default ContactList;