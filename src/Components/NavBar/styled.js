import styled from 'styled-components'

export const NavContainer = styled.nav`
     display: flex;
     flex-direction: row;
     justify-content: space-between;
    padding-left: 3%;
    padding-right: 3%;
    background-color: #2c0e3a;
    padding: 1%;
    
`

export const NavLogo = styled.img`
  width: 150px;



`

export const NavItemContainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
`
export const NavScore= styled.p` 
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
  margin: 0px;
  
`

export const NavSpan = styled.span`
    color: #fec653;
    font-size: 1em;
    font-weight: bold;
`

export const NavTimerLogo= styled.img`
  width: 10%;
`