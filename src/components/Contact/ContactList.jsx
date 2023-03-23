import PropTypes from 'prop-types';
import css from '../Contact/ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.wrapper}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <span>
              {name}: {number}
            </span>
            <button className={css.btn} type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  deleteContact: PropTypes.func.isRequired,
};