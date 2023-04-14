import {RenderItemImageContainer, RenderImage} from './styledComponents'

const ActiveIdDetailContainer = props => {
  const {filterActiveDetails} = props
  const {imageAltText, imageUrl} = filterActiveDetails

  return (
    <RenderItemImageContainer>
      <RenderImage src={imageUrl} alt={imageAltText} />
    </RenderItemImageContainer>
  )
}

export default ActiveIdDetailContainer
