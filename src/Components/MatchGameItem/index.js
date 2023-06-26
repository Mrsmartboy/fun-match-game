import {MatchGameListItem,MatchGameThumbnail} from './styled'

const MatchGameItem=(props)=>{
    const {eachItem,onThumbnail} =props 
    const {thumbnailUrl,category,id}= eachItem
    const onClickThumbnail=()=>{
        onThumbnail(id)
    }

    return(
        <MatchGameListItem onClick={onClickThumbnail}>
            <MatchGameThumbnail src={thumbnailUrl} alt={category}/>
        </MatchGameListItem>

    )

}

export default MatchGameItem