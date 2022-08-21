
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';

export const Form = ({ onSubmit, contactsName }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const onChangeInputName = event => {
    setName(event.currentTarget.value);
  };
  const onChangeInputNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const matchName = (contacts, data) => {
    return contacts.some(contact => contact.name === data.name);
  };

  const handleSubmit = event => {
    // event.preventDefault();

    const contactItem = {
      id: nanoid(10),
      name,
      number,
    };

    if (matchName(contacts, contactItem)) {
      alert(`${name} is already in contacts`);
      
      event.preventDefault();
      reset();
      return;

    } else {
      event.preventDefault();
      dispatch(addContact(contactItem));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          className={css.form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInputName}
          value={name}
        />
      </label>

      <label>
        Number
        <input
          className={css.form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInputNumber}
          value={number}
        />
      </label>

      <button type="submit" className={css.btn_close}>
        Add contact
      </button>
    </form>
  );
};


