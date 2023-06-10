import SideBar from '../../containers/SideBar'

type Props = {
  updateContact: boolean
}

const ContactDetail = ({ updateContact }: Props) => (
  <>
    <SideBar showFilters={false} />
    <div>{updateContact ? <h1>Editar Contato</h1> : <h1>Novo Contato</h1>}</div>
  </>
)

export default ContactDetail
