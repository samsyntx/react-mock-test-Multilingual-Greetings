import {Component} from 'react'

import LanguageMenuItems from '../LanguageMenuItems'
import ActiveIdDetailContainer from '../ActiveIdDetailContainer'

import {
  GreetingsMainContainer,
  MultilingualHeading,
  UnOrderListItemForMenu,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {activeId: languageGreetingsList[0].id}

  changedFromGreetings = uniqueId => {
    this.setState({activeId: uniqueId})
  }

  render() {
    const {activeId} = this.state

    const filterActiveDetails = languageGreetingsList.filter(
      each => each.id === activeId,
    )

    return (
      <>
        <GreetingsMainContainer>
          <MultilingualHeading>Multilingual Greetings</MultilingualHeading>
          <UnOrderListItemForMenu>
            {languageGreetingsList.map(eachItem => (
              <LanguageMenuItems
                key={eachItem.id}
                eachItemDetail={eachItem}
                isActiveId={eachItem.id === activeId}
                changedFromGreetings={this.changedFromGreetings}
              />
            ))}
          </UnOrderListItemForMenu>
          <ActiveIdDetailContainer
            filterActiveDetails={filterActiveDetails.pop()}
          />
        </GreetingsMainContainer>
      </>
    )
  }
}

export default Greetings
