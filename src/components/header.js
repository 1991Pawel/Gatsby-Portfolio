import React from "react"
import Navigation from './Navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
  grid-column:1 / -1;

`
const Header = () => (
  <StyledHeader>
    <Navigation />
  </StyledHeader>
)

export default Header
