import {PlayingViewImages, GameOptionButton} from './styledComponent'

const GameOptions = props => {
  const {gameOptionsImages, clickedGameImage} = props
  const {imageUrl, id} = gameOptionsImages

  const clickedOnImage = () => {
    clickedGameImage(imageUrl, id)
  }
  console.log(`${id.toLowerCase()}Button`)
  return (
    <GameOptionButton data-testid={`${id.toLowerCase()}Button`}>
      <PlayingViewImages src={imageUrl} alt={id} onClick={clickedOnImage} />
    </GameOptionButton>
  )
}

export default GameOptions
