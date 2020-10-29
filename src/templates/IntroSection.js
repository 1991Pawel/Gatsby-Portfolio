import React from 'react'
import styled from 'styled-components';
import { Button } from '../components/Button';
import { TextDecoration } from '../components/TextDecoration';

const IntroSectionWrapper = styled.section`
  position:relative;
  grid-column:2 /span 2;
  min-height:40vh;
  margin-top:3rem;

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
    <IntroSectionWrapper>
      <IntroContent>
        <IntroTitle>
          <TextDecoration>Nazywam się Paweł i jestem</TextDecoration>
                        Junior Front End Developerem
                </IntroTitle>
        <p>
          Zapraszam cię do zobaczenia moich projektów
                gdzie stawiam zarówno na <SpecialText>jakość</SpecialText> kodu jak i <SpecialText>UI/UX</SpecialText> aplikacji.
        </p>
      </IntroContent>
      <Button>
        Portfolio
      </Button>
    </IntroSectionWrapper>
  );

export default IntroSection;
