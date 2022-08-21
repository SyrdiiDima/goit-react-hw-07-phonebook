import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from "./ContactItem.module.css"
import { deleteContact } from 'redux/contactSlice';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.cnt_item}>
      <span className={css.cnt_name}>{name}:</span>
      <span className={css.cnt_number}>{number}</span>
      <button
      className={css.close}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        
      >
        x
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

};

export default ContactItem;