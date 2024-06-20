import './ContactsPage.css'

import TypeContacts from '../components/TypeContacts'

const ContactsPage = () => {

  document.title = 'Nossos contatos | G-Corp'

  return (
    <div className="contactspage-main-container">
      <TypeContacts />
    </div>
  )
}

export default ContactsPage