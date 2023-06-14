import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import ContactClass from '../../models/Contact'
import { addHandle, updateHandle } from '../../store/reducers/contact'

import * as S from './styles'
import { FormField } from '../../styles'

type Props = ContactClass

const Contact = ({
  fullName: originalFullName,
  email: originalEmail,
  phoneNumber: originalPhoneNumber
}: Props) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    if (originalFullName.length > 0) {
      setFullName(originalFullName)
    }
  }, [originalFullName])

  useEffect(() => {
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
  }, [originalEmail])

  useEffect(() => {
    if (originalPhoneNumber.length > 0) {
      setPhoneNumber(originalPhoneNumber)
    }
  }, [originalPhoneNumber])

  function cancelEditMode() {
    setEditMode(false)
    setFullName(originalFullName)
    setEmail(originalEmail)
    setPhoneNumber(originalPhoneNumber)
  }

  return (
    <S.ContactCard>
      <FormField type="text" placeholder="Nome" value={fullName} />
      <FormField type="email" placeholder="E-Mail" value={email} />
      <FormField type="tel" placeholder="Telefone" value={phoneNumber} />
    </S.ContactCard>
  )
}

export default Contact
