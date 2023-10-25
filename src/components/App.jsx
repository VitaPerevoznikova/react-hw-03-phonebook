import { Component } from 'react';

import { Section } from './Section/Section';

import ContactForm from './ContactForm/ContactForm';

import ContactList from './ContactList/ContactList';

import { Filter } from './Filter/Filter';

import initialContacts from './data/contacts.json';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringifiedContacts) ?? initialContacts;

    this.setState({ products: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    if(prevState.contacts !== this.state.contacts) {
     const stringifiedContacts = JSON.stringify(this.state.contacts);
     localStorage.setItem('contacts', stringifiedContacts);
    }
  }


  addContact = data => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    this.setState({
      contacts: [
        ...contacts,
        {
          id: nanoid(),
          name: data.name,
          number: data.number,
        },
      ],
    });
  };

  onChangeFilter = value => {
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const visibleContacts = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(visibleContacts)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };
  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact} />
          <h2>Contacts</h2>
          {visibleContacts.length > 0 ? (
            <Filter value={filter} onChangeFilter={this.onChangeFilter} />
          ) :(
            <div>There are no contacts in your phonebook. Please add your first contact!</div>
          )}
          {visibleContacts.length > 0 && (
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          )}
        </Section>
      </>
    );
  }
}
