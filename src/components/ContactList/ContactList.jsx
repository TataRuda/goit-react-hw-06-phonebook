import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);
 
    return (
        <ul>
            {filteredContacts.map((contact) => (
            <ContactItem 
            key= {nanoid()}
            {...contact}
            />
            ))}
        </ul>
    )
}
