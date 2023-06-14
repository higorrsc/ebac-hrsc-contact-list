import styled from 'styled-components'

import { Botao } from '../../styles'
import variables from '../../styles/variables'

export const CancelButton = styled(Botao)`
  background-color: ${variables.roxoEscuro};
`

export const SaveButton = styled(Botao)`
  background-color: ${variables.vermelho};
`

export const ContactCard = styled.div`
  background-color: ${variables.cinza};
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
