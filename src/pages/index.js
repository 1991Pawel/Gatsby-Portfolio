import React from "react"
import Layout from '../components/Layout'
import styled from 'styled-components'

const IntroSection = styled.section`
  position:relative;
  

  grid-column:2 /span 2;
  height:50vh;
  margin-top:5rem;

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
  }

  button {
    margin-top:2rem;
  }

  p{
    margin-top:1rem;
  }
`;
const IntroContent = styled.div`
  font-weight:500;
  @media only screen and (min-width: 600px) {  
      width:70%;
  } 
  @media only screen and (min-width: 800px) {  
      width:50%;
  } 
`;

const IntroTitle = styled.h1`
  display:flex;
  flex-direction:column; 

  
`;

const IntroSubTitle = styled.span`
   position:relative;
   font-size:1.6rem;
   font-weight:500;
   margin-left:3rem;
   

   &:before {
     position:absolute;
     top:50%;
     left: -3rem;
     content:'';
     display:block;
     height:.25rem;
     width:2rem;
     background:#0099F2;
     transform:translateY(-50%);
   }
`;

const SpecialText = styled.span`
   font-weight:600;
   color: #0099F2;
`;

const IntroBtn = styled.button`
   height:4rem;
   min-width:12rem;
   background:#000;
   color:#fff;
   border:none;
   text-transform:uppercase;
   cursor: pointer;
`;

const IndexPage = () => (
  <Layout>
    <IntroSection>
      <IntroContent>
        <IntroTitle>
          <IntroSubTitle>Nazywam się Paweł i jestem</IntroSubTitle>
          Junior Front End Developerem
        </IntroTitle>
        <p>
          Zapraszam cię do zobaczenia moich projektów
          Gdzie stawiam zarówno na <SpecialText>jakość</SpecialText> kodu jak i <SpecialText>UI/UX</SpecialText> aplikacji.
        </p>
      </IntroContent>
      <IntroBtn>
        Portfolio
      </IntroBtn>
    </IntroSection>
  </Layout>
)

export default IndexPage
