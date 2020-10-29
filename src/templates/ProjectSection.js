import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { TextDecoration } from '../components/TextDecoration'

import FirstProject from '../images/first.jpg'
import FirstSampel from '../images/first-sampel.jpg'
import SecondProject from '../images/second-project.jpg'
import SecondSampel from '../images/second-sampel.jpg'
import ThirdProject from '../images/third-project.png'
import ThirdSamepl from '../images/third-sampel.png'



const PortfolioSectionWrapper = styled.section`
  grid-column:2 /span 2;
  padding:3rem 0;

  h2 {
    text-align:center;

    @media only screen and (min-width: 800px) {  
    margin-bottom:10rem;
    } 
  }

  h3 {
    font-weight:600;
  }
`;

const ProjectContent = styled.div`
  width:100%; 

  p {
      margin:2rem 0;
  }


  @media only screen and (min-width: 600px) {  
     max-width:500px;
    }

  @media only screen and (min-width: 800px) {  
     max-width:400px;
    }

`;


const Project = styled.div`
  display:flex;
  flex-direction:column;   
  margin: 7rem 0;

      &:nth-of-type(even){
        ${ProjectContent} {
          @media only screen and (min-width: 800px) {  
            order:2; 
      }
    }
       
      img:nth-of-type(1) {
        @media only screen and (min-width: 800px) {  
            transform:translate(-20%,-50%);
            
        }
      }
    }
  
    @media only screen and (min-width: 800px) {  
      flex-direction:row;
      align-items:center;
      justify-content:space-between;
      margin: 10rem 0;
    
     }

     @media only screen and (min-width: 1200px) {  
      margin: 12rem 0;
    
     }

`;



const ProjectPhoto = styled.div`
  position:relative;
  height:300px;
  width:100%;
  background-image: url(${({ props }) => props});
  background-size: cover;
  background-repeat:no-repeat;

  @media only screen and (min-width: 600px) {  
      height:500px;
      width:100%;
    } 
    
  @media only screen and (min-width: 800px) {  
     max-width:40%;
    } 
 

  img {
    position:absolute;
    top:50%;
    left:50%;
    max-height: 80%;
    max-width: 80%;
    transform:translate(-50%,-50%);
    filter: drop-shadow(0px 14px 28px rgba(0,0,0,0.3));

 
    @media only screen and (min-width: 800px) {  
      transform:translate(-80%,-50%);
      
    } 

  
  }
`;


const ProjectSection = () => {


  return (
    <PortfolioSectionWrapper id="project">
      <h2>Portfolio</h2>
      <Project>
        <ProjectContent>
          <h3>Landing Page</h3>
          <p>
            Komercyjny projekt wykonany dla fotografa,
            strona posiada połączenie z hedless CMS
                    </p>
          <p><TextDecoration>
            Technologie
                    </TextDecoration></p>
          <p>HTML , SCSS, GATSBY, GRAPHQL, DATOCMS</p>
          <Button target="_blank" rel="noreferrer" href="https://michal-wrocenski.netlify.app/">
            Uruchom
          </Button>
          <Button secondary target="_blank" rel="noreferrer" href="https://github.com/1991Pawel/gatsby-cms">
            GitHub
          </Button>
        </ProjectContent>
        <ProjectPhoto props={FirstProject}>
          <img src={FirstSampel} alt="project photography website" />
        </ProjectPhoto>
      </Project>
      <Project>
        <ProjectContent>
          <h3>Landing Page</h3>
          <p>
            Pierwszy komercyjny projekt wykonany
            dla trenera sportów sylwetkowych.
                    </p>
          <TextDecoration>
            Technologie
                    </TextDecoration>
          <p>HTML , CSS, JS</p>
          <Button target="_blank" rel="noreferrer" href="http://korzeniecka.pl/">
            Uruchom
                    </Button>
          <Button secondary target="_blank" rel="noreferrer" href="https://github.com/1991Pawel/fitness-website">
            GitHub
                    </Button>
        </ProjectContent>
        <ProjectPhoto props={SecondProject}>
          <img src={SecondSampel} alt="project fitness website" />
        </ProjectPhoto>
      </Project>
      <Project>
        <ProjectContent>
          <h3>Landing Page</h3>
          <p>
            Aplikacja do zarzadzania zadaniami,
            dzięki niej łatwiej sledzić co jeszcze
            musimy wykonać i jaki jest stan zadania.
                    </p>
          <TextDecoration>
            Technologie
                    </TextDecoration>
          <p>REACT, TYPESCRIPT, FIREBASE, STYLED COMPONENTS</p>
          <Button target="_blank" rel="noreferrer" href="https://yourtaskapp.netlify.app/">
            Uruchom
                    </Button>
          <Button secondary target="_blank" rel="noreferrer" href="https://github.com/1991Pawel/react-firebase">
            GitHub
           </Button>
        </ProjectContent>
        <ProjectPhoto props={ThirdSamepl}>
          <img src={ThirdProject} alt="project todo app" />
        </ProjectPhoto>
      </Project>
    </PortfolioSectionWrapper>
  )
}

export default ProjectSection;