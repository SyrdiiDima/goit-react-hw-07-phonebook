import { useDispatch } from 'react-redux';
import css from './FilterContact.module.css';
import { filterContact } from 'redux/contactSlice';

const FilterContact = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p className={css.title}>Find contact by name</p>
      <input
        className={css.flt_input}
        type="text"
        name="filter"
        // value={value}
        onChange={event => dispatch(filterContact(event.currentTarget.value))}
      ></input>
    </div>
  );
};

export default FilterContact;


