import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Botao } from '../../styles'
import LetterCardList from '../../components/LetterCardList'
import * as S from './styles'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <LetterCardList />
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
