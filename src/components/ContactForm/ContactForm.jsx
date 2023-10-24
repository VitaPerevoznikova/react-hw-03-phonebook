import React, { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = name => e => {
    const { target } = e;
    this.setState({
      [name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onAddContact } = this.props;
    onAddContact(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form}
       onSubmit={this.handleSubmit}>
        <label className={css.label} >
          <p className={css.nameLabel}>Name</p>
          <input className={css.input}
            onChange={this.handleChange('name')}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter your name"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label className={css.label}>
         <p className={css.nameLabel}>Number</p>
          <input className={css.input}
            onChange={this.handleChange('number')}
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="Enter your number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </label>
        <button className={css.btnFormAdd} type="submit">Add contacts</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
