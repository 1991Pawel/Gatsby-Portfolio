import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react'
import styled from 'styled-components';
import { TextDecoration } from '../components/TextDecoration';

const IntroSectionWrapper = styled.section`
  position:relative;
  grid-column:2 /span 2;
  min-height:40vh;
  margin-top:4rem;

  padding-top:8rem;
    
  @media only screen and (min-width: 600px) {
     padding-top:10rem;
  
  } 


  &:before {
    position:absolute;
    content:'Cześć';
    display:block;
 
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    font-size:10rem;
    font-weight:700;
    color:#f0f0f0;
    z-index:-1;
    
    @media only screen and (min-width: 800px) {  
      font-size:13rem;
    } 
    @media only screen and (min-width: 1000px) {  
    font-size:20rem;
    } 
  }

  a {
    margin-top:2rem;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    height:4rem;
    min-width:12rem;
    background:#000;
    color:#fff;
    border:none;
    text-transform:uppercase;
    cursor: pointer;
    margin:3rem 0;
    text-decoration:none;
  }

    p{
      margin-top:1rem;
      line-height: 3rem;
      @media only screen and (min-width: 800px) {  
        font-size:2rem;
    } 

  }
`;
const IntroContent = styled.div`
  font-weight:500;
  @media only screen and (min-width: 600px) {  
      width:70%;
      max-width:650px;
  } 

`;

const IntroTitle = styled.h1`
  display:flex;
  flex-direction:column; 
  @media only screen and (min-width: 800px) {  
    font-size:5rem;
  } 

  span {
    font-size:1.6rem;
    @media only screen and (min-width: 800px) {  
    font-size:2rem;
  } 
  }

`;

const SpecialText = styled.span`
   font-weight:600;
   color: #0099F2;
`;




const IntroSection = () =>
  (
    <IntroSectionWrapper id="intro">
      <IntroContent>
        <IntroTitle>
          <TextDecoration>Nazywam się Paweł i jestem</TextDecoration>
                        Junior Front End Developerem
                </IntroTitle>
        <p>
          Zapraszam Cię do zobaczenia moich projektów
                , gdzie stawiam zarówno na <SpecialText>jakość</SpecialText> kodu, jak i <SpecialText>UI/UX</SpecialText> aplikacji.
        </p>
      </IntroContent>
      <AnchorLink to="/#project" title="portfolio" />
    </IntroSectionWrapper>
  );

export default IntroSection;
