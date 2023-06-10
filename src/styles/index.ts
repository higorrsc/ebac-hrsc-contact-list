import styled, { createGlobalStyle } from 'styled-components'

import variaveis from './variables'

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

export const Botao = styled.button`
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

export default EstiloGlobal
