import React, { Component } from 'react';
import ContactList from './ContactList';
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then( contacts => {
      this.setState({ contacts }) //is the same of contacts: contacts, when both are the same can use just contacts
    })
  }

  removeContact = (contact) => {
    this.setState((currentStateList) => ({
      //stay on the new list array only those who have diferent id 
      contacts: currentStateList.contacts.filter( c => c.id !== contact.id )
    }))

    ContactsAPI.remove(contact);
  }

  render() {

    return (
      <div>
        <ContactList 
          onDeleteContact={this.removeContact} 
          list={this.state.contacts} />
      </div>
    );
  }
}

export default App;
