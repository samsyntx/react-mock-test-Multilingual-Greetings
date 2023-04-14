import styled from 'styled-components'

export const RenderItemImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const RenderImage = styled.img`
  width: 200px;
  height: 300px;
  @media all and (min-width: 700px) {
    width: 300px;
    height: 400px;
  }
`
