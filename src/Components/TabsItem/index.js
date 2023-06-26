import {TabItemContainer} from'./styled'
const TabsItem=(props)=>{
    const {eachTab,onTab,isActive} = props 
   const {displayText,tabId}= eachTab 

   const onClickTabItem=()=>{
           onTab(tabId)
   }

   return(
    <TabItemContainer onClick={onClickTabItem} isActive={isActive}>
        {displayText}
    </TabItemContainer>
   )

}

export default TabsItem