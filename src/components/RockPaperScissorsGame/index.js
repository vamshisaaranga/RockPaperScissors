import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameOptions from '../GameOptions'
import {
  BgContainer,
  MainHeading,
  Container,
  ScoreContainer,
  Paragraph,
  ScoreElementContainer,
  PlayingViewImagesContainer,
  RulesButtonContainer,
  RulesButton,
  RulesImage,
  RulesImageContainer,
  PopupContainer,
  PopupCloseButton,
  ResultViewImage,
  ResultViewImagesContainer,
  HeadingElement,
  ScoreParagraph,
} from './styledComponents'

class RockPaperScissorsGame extends Component {
  state = {
    selectedImage: '',
    opponentImage: '',
    resultView: false,
    selectedId: '',
    opponentId: '',
    score: 0,
    gameResult: '',
  }

  opponentImage = () => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * 3)
    const opponentImage = choicesList[randomNumber].imageUrl
    const opponentId = choicesList[randomNumber].id
    return {opponentImage, opponentId}
  }

  scoreCalculation = () => {
    const {selectedId, opponentId} = this.state
    if (selectedId === 'PAPER') {
      if (opponentId === 'ROCK') {
        this.setState(prevState => ({
          gameResult: 'YOU WON',
          score: prevState.score + 1,
        }))
      } else if (opponentId === 'SCISSORS') {
        this.setState(prevState => ({
          gameResult: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      }
    }
    if (selectedId === 'SCISSORS') {
      if (opponentId === 'ROCK') {
        this.setState(prevState => ({
          gameResult: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      } else if (opponentId === 'PAPER') {
        this.setState(prevState => ({
          gameResult: 'YOU WON',
          score: prevState.score + 1,
        }))
      }
    }
    if (selectedId === 'ROCK') {
      if (opponentId === 'PAPER') {
        this.setState(prevState => ({
          gameResult: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      } else if (opponentId === 'SCISSORS') {
        this.setState(prevState => ({
          gameResult: 'YOU WON',
          score: prevState.score + 1,
        }))
      }
    }
    if (selectedId === opponentId) {
      this.setState({gameResult: 'IT IS DRAW'})
    }
  }

  clickedGameImage = (imageUrl, id) => {
    const opponent = this.opponentImage()
    this.setState(
      {
        selectedImage: imageUrl,
        opponentImage: opponent.opponentImage,
        resultView: true,
        selectedId: id,
        opponentId: opponent.opponentId,
      },
      this.scoreCalculation,
    )
  }

  clickedPlayAgain = () => {
    this.setState({
      resultView: false,
    })
  }

  gameResultView = () => {
    const {selectedImage, opponentImage, gameResult} = this.state
    return (
      <>
        <ResultViewImagesContainer>
          <div>
            <HeadingElement>YOU</HeadingElement>
            <ResultViewImage src={selectedImage} alt="your choice" />
          </div>
          <div>
            <HeadingElement>OPPONENT</HeadingElement>
            <ResultViewImage src={opponentImage} alt="opponent choice" />
          </div>
        </ResultViewImagesContainer>
        <Paragraph color="#ffffff">{gameResult}</Paragraph>
        <RulesButton onClick={this.clickedPlayAgain}>PLAY AGAIN</RulesButton>
      </>
    )
  }

  playingView = () => {
    const {choicesList} = this.props
    return (
      <>
        <PlayingViewImagesContainer>
          {choicesList.map(each => (
            <GameOptions
              gameOptionsImages={each}
              key={each.id}
              clickedGameImage={this.clickedGameImage}
            />
          ))}
        </PlayingViewImagesContainer>
      </>
    )
  }

  render() {
    const {resultView, score} = this.state

    return (
      <BgContainer>
        <Container>
          <ScoreContainer>
            <div>
              <MainHeading color="#ffffff" fontFamily="Bree Serif">
                ROCK
              </MainHeading>
              <MainHeading color="#ffffff" fontFamily="Bree Serif">
                PAPER
              </MainHeading>
              <MainHeading color="#ffffff" fontFamily="Bree Serif">
                SCISSORS
              </MainHeading>
            </div>
            <ScoreElementContainer>
              <Paragraph color="#223a5f" fontFamily="Bree Serif">
                Score
              </Paragraph>
              <ScoreParagraph color="#223a5f" fontFamily="Roboto">
                {score}
              </ScoreParagraph>
            </ScoreElementContainer>
          </ScoreContainer>
          <MainHeading color="#ffffff">Rock Paper Scissors</MainHeading>
          {resultView ? this.gameResultView() : this.playingView()}
        </Container>
        <RulesButtonContainer>
          <Popup trigger={<RulesButton>Rules</RulesButton>} modal>
            {close => (
              <PopupContainer>
                <PopupCloseButton onClick={close}>
                  <RiCloseLine />
                </PopupCloseButton>

                <RulesImageContainer>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesImageContainer>
              </PopupContainer>
            )}
          </Popup>
        </RulesButtonContainer>
      </BgContainer>
    )
  }
}

export default RockPaperScissorsGame
