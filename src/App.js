import React, { Component } from 'react';
import ContactList from './ContactList';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'create', //list or create
      contacts: []
    }

    this.removeContact = this.removeContact.bind(this); //throw the reference of App class into the removeContact function to be used in this.setState()
  }

  componentDidMount() {
    ContactsAPI.getAll().then( contacts => this.setState({ contacts })) // contacts == contacts: contacts(on this.state)
  }

  removeContact(contact) {
    this.setState((currentStateList) => ({
      //stay on the new list array only those who have diferent id 
      contacts: currentStateList.contacts.filter( c => c.id !== contact.id )
    }))

    ContactsAPI.remove(contact);
  }

  render() {

    return (
      <div>
        {this.state.screen === 'list' && (
          <ContactList 
          onDeleteContact={this.removeContact} 
          list={this.state.contacts} />
        )}

        {this.state.screen === 'create' && (
          <CreateContact />
        )}

      </div>
    );
  }
}

export default App;
