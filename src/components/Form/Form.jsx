import { useState } from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from 'react-redux';
import {
  useAddContactMutation,
  useGetContactByNameQuery,
} from 'redux/contactApi';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useGetContactByNameQuery().data;
  const [addContact] = useAddContactMutation();
  

  const onChangeInputName = event => {
    setName(event.currentTarget.value);
  };
  const onChangeInputNumber = event => {
    setPhone(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contactItem = {
      id: nanoid(10),
      name,
      phone,
    };

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }

    addContact(contactItem);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
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
          value={phone}
        />
      </label>

      <button type="submit" className={css.btn_close}>
        Add contact
      </button>
    </form>
  );
};
