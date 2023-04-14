import {ListItemMenu, ButtonItemMenu} from './styledComponents'

const LanguageMenuItems = props => {
  const {eachItemDetail, isActiveId, changedFromGreetings} = props
  const {id, buttonText} = eachItemDetail

  const clickTOChangeActiveMenu = () => {
    changedFromGreetings(id)
  }

  return (
    <ListItemMenu>
      <ButtonItemMenu onClick={clickTOChangeActiveMenu} isActive={isActiveId}>
        {buttonText}
      </ButtonItemMenu>
    </ListItemMenu>
  )
}

export default LanguageMenuItems
