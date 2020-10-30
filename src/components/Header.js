import React from "react"
import Navigation from './Navigation'
import styled from 'styled-components'


const StyledHeader = styled.header`
  grid-column:2/ span 2;
  
`;

const HeaderWrapper = styled.div`
  max-width:1400px;
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
