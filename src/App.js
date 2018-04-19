import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends Component {
  render() {
    const people = [
      {name: 'armando'},
      {name: 'Ana lidia'},
      {name: 'lidia'}
    ];
    return <ol>
        {people.map((person, index) => (
          <li key={person.index}> {person.name} </li>
        ))}
      </ol>
  }
}

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Contact List!</h1>
        </header>
        <p className="App-intro">
          <ContactList />
        </p>
      </div>
    );
  }
}

export default App;
