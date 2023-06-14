import styled, { createGlobalStyle } from 'styled-components'

import variaveis from './variables'

type Props = {
  formWidth?: string
}

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    background-color: ${variaveis.branco}
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 196px auto;
`

export const ActionButton = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.laranjaEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const FormField = styled.input<Props>`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: ${({ formWidth = '100%' }) => formWidth};
`

export default EstiloGlobal
