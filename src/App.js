import React, { Component } from 'react';
import ContactList from './ContactList';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';
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

  createContact = (contact) => {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }

  render() {

    return (
      <div>
        <Route exact path="/" render={() => (
            <ContactList 
            onDeleteContact={this.removeContact} 	           
            list={this.state.contacts} 
            />	   
          )} 
        />
        
        <Route path="/create" render={({history}) => (
          <CreateContact 
            onCreateContact={(contact) => {
              this.createContact(contact);
              history.push('/');
            }}
          />
        
        )} />
       
      </div>
    );
  }
}

export default App;
