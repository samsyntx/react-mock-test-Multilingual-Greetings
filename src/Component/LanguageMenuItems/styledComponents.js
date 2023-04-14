import styled from 'styled-components'

export const ListItemMenu = styled.li`
  margin: 0px 5px 0px 5px;
`

export const ButtonItemMenu = styled.button`
  border: 1px solid #db1c48;
  background-color: ${props => (props.isActive ? '#db1c48' : 'white')};
  color: ${props => (props.isActive ? 'white' : '#db1c48')};
  font-weight: bold;
  width: 100px;
  height: 35px;
  border-radius: 15px;
`
