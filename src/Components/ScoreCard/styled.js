import styled from 'styled-components'

export const ScoreCardContainer= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png");
  background-size: cover;
  width: 40%;
  height: 500px;
  padding: 10px;
  @media screen and (min-width:576px){
      background-image: url("https://assets.ccbp.in/frontend/react-js/match-game-score-card-sm-bg.png");
      width: 40%;
     
  }
  @media screen and (max-width:576px){
      background-image: url("https://assets.ccbp.in/frontend/react-js/match-game-score-card-sm-bg.png");
       width: 80%;
       
  }

 
  
`

export const ScoreCardImg= styled.img`
  width: 50%;
  margin-top: 40%;
`

export const ScoreHead= styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 5px;
`
export const Score = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: #ffffff;
  margin-top:0px ;
  margin-bottom: 5px;
`

export const PlayAgainButton=styled.button`
   background-color: #cf60c8;
   color: #ffffff;
   font-size: 20px;
   font-weight: bold;
   margin: 0px;
   border: none;
   outline: none;
   padding: 8px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   border-radius: 5px;
   cursor: pointer;
`

export const ResetImg= styled.img`
   width: 18%;
`
