import React from "react"
import Navigation from './Navigation'
import styled from 'styled-components'


const StyledHeader = styled.header`
  position:fixed;
  max-width:1400px;
  margin:0 auto;
  top:0;
  left:0;
  right:0;
  width:100%;
  height:8rem;
  z-index:99;
  background-color:#fff;
  padding:1.25rem;
    
  @media only screen and (min-width: 600px) {
     height:10rem;
    } 
`;



const Header = () => (
  <StyledHeader>
    <Navigation />
  </StyledHeader>
)

export default Header
