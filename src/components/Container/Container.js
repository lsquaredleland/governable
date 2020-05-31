import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1800px;
  width: 100%;
  padding: 0 24px;
`

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container
