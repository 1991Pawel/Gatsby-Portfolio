import React, { useEffect, useState } from "react"
import Navigation from './Navigation'
import styled from 'styled-components'


const StyledHeader = styled.header`
  position:fixed;
  margin:0 auto;
  top:0;
  left:0;
  right:0;
  width:100%;
  height:${({ isScroll }) => isScroll ? '8rem' : '10rem'};
  z-index:99;
  padding:1.25rem;
  transition:.5s ease-in-out;
  background-color:${({ isScroll }) => isScroll ? '#F9F9F9' : '#FFF'};
    
  @media only screen and (min-width: 600px) {
     /* height:10rem; */
    } 
`;



const Header = () => {
  const [isScroll, setIsScroll] = useState();

  const listener = e => {
    const isScroll = window.scrollY >= 280
    setIsScroll(isScroll)
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <StyledHeader isScroll={isScroll}>
      <Navigation />
    </StyledHeader>
  )
}

export default Header
