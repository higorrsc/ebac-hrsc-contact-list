import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

const ContactList = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts)

  const contactsFilter = () => {
    const filteredContacts = contacts
  }

  return contacts
}

export default ContactList
