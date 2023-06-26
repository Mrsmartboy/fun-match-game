import styled from 'styled-components'

export const MatchGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  background-image: url("https://assets.ccbp.in/frontend/react-js/match-game-bg.png");
  background-size: cover;
  padding: 20px;
`

export const MatchGameImage= styled.img`
  width: 50%;
  border-radius: 5px;
  @media screen and (max-width:576px){
    width: 80%;
  }
`

export const TabListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-around;
  width: 35%;
  margin: 15px;
  @media screen and (max-width:576px){
    width: 80%;
  }
`

export const MatchGameItemContainer= styled.ul`
    list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  width: 50%;
  flex-wrap: wrap;
  margin: 15px;
  @media screen and (max-width:576px){
    width: 80%;
  }
`