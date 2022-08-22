import ContactItem from 'components/ContactItem/ContactItem';

import { useSelector } from 'react-redux';
import { useGetContactByNameQuery } from 'redux/contactApi';
import React from 'react';

const ContactList = () => {
  const contacts = useGetContactByNameQuery().data;
  const { filter } = useSelector(state => state.filter);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  return (
    <ul>
      {contacts &&
        filteredContacts().map(({ id, name, phone }) => {
          return <ContactItem
            key={id}
            id={id}
            name={name}
            number={phone}
          />;
        })}
    </ul>
  );
};

export default ContactList;
