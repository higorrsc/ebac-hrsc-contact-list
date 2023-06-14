import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

const ContactList = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts)
  const { initialLetter } = useSelector((state: RootReducer) => state.filter)

  const contactsFilter = () => {
    let filteredContacts = contacts

    if (initialLetter !== undefined && initialLetter !== '*') {
      filteredContacts = filteredContacts.filter(
        (contacts) =>
          contacts.fullName.toUpperCase().substring(0, 1) === initialLetter
      )
      return filteredContacts
    } else {
      return contacts
    }
  }

  const contactsFiltered = contactsFilter()

  return (
    <>
      <ul>
        {contactsFiltered.map((c) => (
          <li key={c.id}>
            Nome: {c.fullName}
            <br />
            E-Mail: {c.email}
            <br />
            Telefone: {c.phoneNumber}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ContactList
