import styled from 'styled-components'

export const TabItemContainer = styled.li`
  color:  ${props=>props.isActive?"#fec653":"#ffffff"};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-bottom: ${props=>props.isActive&&"2px solid #fec653"};
`
