import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const initialState = { name: '', number: ''};
  const [contact, setContact] = useState(initialState);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContact(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = contacts.find(({ name }) => name === contact.name);
    const isDuplicateNumber = contacts.find(({ number }) => number === contact.number);
  if (isDuplicate) {
    alert( `${contact.name} already exists!`);
    return;
  }
  else if (isDuplicateNumber) {
    alert( `${contact.number} already exists in the contacts!`);
    return;
  }
    dispatch(addContact({ name: contact.name, number: contact.number, id: nanoid() }));
    setContact(initialState);
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        id={nameId}
        type="text"
        value={contact.name}
        onChange={handleChange}
        pattern="[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <input
        id={numberId}
        type="tel"
        value={contact.number}
        onChange={handleChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
