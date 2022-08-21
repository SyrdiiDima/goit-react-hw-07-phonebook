import PropTypes from 'prop-types';

import css from "./ContactItem.module.css"

import { useDeleteContactMutation } from 'redux/contactApi';

const ContactItem = ({ id, name, number }) => {
  // const dispatch = useDispatch();
  const [deleteContact] = useDeleteContactMutation();
 
  return (
    <li className={css.cnt_item}>
      <span className={css.cnt_name}>{name}:</span>
      <span className={css.cnt_number}>{number}</span>
      <button
      className={css.close}
        type="button"
        onClick={() => deleteContact(id)}
        
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