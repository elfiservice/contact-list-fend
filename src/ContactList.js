import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

    clearInputSearch = () => {
        this.setState({ valueInputSearch: '' })
    }

    render() {
        const { list, onDeleteContact } = this.props;
        const { valueInputSearch } = this.state;
        // const listContacts = this.props.list;
        // const stateValueInputSearch = this.state.valueInputSearch;
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
                    <Link 
                        to="/create"
                        className="add-contact"
                    >Add Contact</Link>
                </div>

                {showingContacts.length !== list.length && (
                    <div className="showing-contacts">
                        <span> Now showing {showingContacts.length} of {list.length} </span>
                        <button onClick={this.clearInputSearch}> Show all </button>
                    </div>                    
                )}

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