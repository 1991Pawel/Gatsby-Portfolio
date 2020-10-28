import React from "react"
import Navigation from './Navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
  grid-column:1 /-1;
  padding:0 1rem;
`;

const HeaderWrapper = styled.div`
  max-width:1200px;
  margin:0 auto;
`;


const Header = () => (
  <StyledHeader>
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  </StyledHeader>
)

export default Header
