import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list} >
    {contacts.map(contact => (
      <li className={css.item}
      key={contact.id}>
        <p className={css.info}>{contact.name + ' : ' + contact.number}</p>
        {
          <button
          className={css.btnList}
            type="button"
            name="delete"
            onClick={() => onDeleteContact(contact.id)}
          > Delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
