import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  height: 150vh;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  width: 80%;
  border-radius: 10px;
  margin-top: 30px;
`
export const PlayingViewImagesContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  width: 350px;
  flex-wrap: wrap;
`

export const Paragraph = styled.p`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`
export const ScoreParagraph = styled.p`
  color: #223a5f;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`

export const MainHeading = styled.h1`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`

export const ScoreElementContainer = styled.div`
  background-color: #ffffff;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  border-radius: 10px;
`

export const RulesButton = styled.button`
  height: 40px;
  min-width: 80px;
  color: #223a5f;
  font-family: roboto;
  font-weight: 500;
  border-radius: 6px;
  border-width: 0px;
  cursor: pointer;
`

export const RulesButtonContainer = styled.div`
  text-align: right;
  margin: 30px;
`
export const RulesImage = styled.img`
  height: 400px;
`

export const RulesImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
  height: 80vh;
  width: 100vh;
`
export const PopupCloseButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;
`
export const HeadingElement = styled.h1`
  text-align: center;
  margin: 20px;
  font-family: roboto;
  color: #ffffff;
`

export const ResultViewImage = styled.img`
  height: 200px;
  margin: 20px;
`

export const ResultViewImagesContainer = styled.div`
  display: flex;
  margin-top: 50px;
`
