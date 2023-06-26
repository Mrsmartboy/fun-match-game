
import {NavContainer,NavLogo,NavScore,NavTimerLogo,NavSpan,NavItemContainer} from './styled'
const NavBar=(props)=>{
  const {timerValue,score}=props
    return(
        <NavContainer>
            <NavLogo src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png" alt="websiteLogo"/>
            <NavItemContainer>
                <NavScore>Score: <NavSpan>{score}</NavSpan></NavScore>
                <NavTimerLogo src='https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png' alt="timer"/>
                <NavSpan> {timerValue} Sec</NavSpan>
            </NavItemContainer>

        </NavContainer>

    )
}

export default NavBar