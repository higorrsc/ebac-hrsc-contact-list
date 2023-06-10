import { LetterCardContainer, LetterCardButton } from './styles'

const LetterCardList = () => {
  const letters = []
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i))
  }

  return (
    <LetterCardContainer>
      {letters.map((letter, index) => (
        <LetterCardButton key={index} active={letter === 'A'}>
          {letter}
        </LetterCardButton>
      ))}
    </LetterCardContainer>
  )
}

export default LetterCardList
