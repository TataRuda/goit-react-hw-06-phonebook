import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice'; 
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
      dispatch(deleteContact(id));
    };
    return ( <li className={css.item} key={id}>
        <span>{name}: {number}</span>
        <button className={css.btnDelete} type="button" onClick={handleDelete}>Delete</button>      
    </li>
    );
};

