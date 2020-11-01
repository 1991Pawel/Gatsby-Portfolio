import React from 'react'
import styled from 'styled-components'
import { Button as StyledLink } from '../components/Button'
import emailIcon from '../images/emailicon.svg';
import gitIcon from '../images/github.icon.svg';
import mobile from '../images/mobilephone.svg';


const ContactSectionWrapper = styled.section`
  grid-column:2 /span 2;
  padding:3rem 0;
  
  h2 {
    text-align:center;
  }

`;

const StyledContactListWrapper = styled.ul`

  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  
  a {
    border:none;
    padding:2rem;
    margin-left: auto;
    background-color:#000;
    margin:0;

    @media (min-width: 800px) {
    padding:2.5rem;
  }
  }

   @media (min-width: 800px) {
    display: flex;
    justify-content: center;
    padding:2rem 0;
  }

`;

const StyledContactItem = styled.li`
  list-style: none;
  padding: 1rem 0;
  margin:1rem;


  img {
    height: 20px;
    width: 20px;
    margin-right:2rem;
  }
`;


const ContactSection = () => {


  return (
    <ContactSectionWrapper id="contact">
      <h2>Kontakt</h2>
      <StyledContactListWrapper>
        <StyledContactItem>
          <StyledLink href="mailto: lesnik.pawel1991@gmail.com">
            <img src={emailIcon} alt="live icon" />
          lesnik.pawel1991@gmail.com
        </StyledLink>
        </StyledContactItem>
        <StyledContactItem>
          <StyledLink href="tel:504761685">
            <img src={mobile} alt="live icon" />
          504761685
        </StyledLink>
        </StyledContactItem>
        <StyledContactItem>
          <StyledLink

            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/1991Pawel"
          >
            <img src={gitIcon} alt="live icon" />
          Github
        </StyledLink>
        </StyledContactItem>
      </StyledContactListWrapper>
    </ContactSectionWrapper>
  )
}

export default ContactSection;