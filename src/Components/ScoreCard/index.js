
import {ScoreCardContainer,ScoreCardImg,Score,PlayAgainButton,ResetImg,ScoreHead} from './styled'
const ScoreCard=(props)=>{
   const {onReset,score} =props
    const onResetBtn=()=>{
        onReset()
    }

    return(
        <ScoreCardContainer>
            <ScoreCardImg src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png" alt="trophy"/>
            <ScoreHead>Your Score</ScoreHead>
            <Score>{score}</Score>
            <PlayAgainButton onClick={onResetBtn}>
                <ResetImg src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png" alt="reset"/>
                Play Again
            </PlayAgainButton>
        </ScoreCardContainer>
    )

}

export default ScoreCard