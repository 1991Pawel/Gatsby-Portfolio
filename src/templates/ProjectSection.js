import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'

import FirstProject from '../images/first.jpg'
import FirstSampel from '../images/first-sampel.jpg'
import SecondProject from '../images/second-project.jpg'
import SecondSampel from '../images/second-sampel.jpg'
import ThirdProject from '../images/third-project.png'
import ThirdSamepl from '../images/third-sampel.png'


const IntroSubTitle = styled.span`
   position:relative;
   font-size:1.6rem;
   font-weight:500;
   margin-left:3rem;
   display:block;
   

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

const PortfolioSection = styled.section`
  grid-column:2 /span 2;

  h2 {
    text-align:center;
  }
`;

const ProjectContent = styled.div`
  width:100%;


  @media only screen and (min-width: 600px) {  
     max-width:500px;
    }

  @media only screen and (min-width: 800px) {  
     max-width:400px;
    }

`;


const Project = styled.div`
  padding:6rem 0;
  display:flex;
  flex-direction:column;   

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
        <PortfolioSectionWrapper>
            <h2>Portfolio</h2>
            <Project>
                <ProjectContent>
                    <h3>Landing Page</h3>
                    <p>
                        Kodsadmercyjny projekt wykonany dla fotografa.
                        Strona posiada połączenie z hedless CMS
                        Komercyjny projekt wykonany dla fotografa.
                        Strona posiada połączenie z hedless CMS
                    </p>
                    <IntroSubTitle>
                        Technologie
                    </IntroSubTitle>
                    <p>HTML , SCSS, GATSBY, GRAPHQL, DATOCMS</p>
                    <Button>
                        Uruchom
                    </Button>
                    <Button secondary>
                        GitHub
                 </Button>
                </ProjectContent>
                <ProjectPhoto props={FirstProject}>
                    <img src={FirstSampel} />
                </ProjectPhoto>
            </Project>
            <Project>
                <ProjectContent>
                    <h3>Landing Page</h3>
                    <p>
                        Pierwszy komercyjny projekt wykonany
                        dla trenera sportów sylwetkowych.
                    </p>
                    <IntroSubTitle>
                        Technologie
                    </IntroSubTitle>
                    <p>HTML , CSS, JS</p>
                    <Button>
                        Uruchom
                    </Button>
                    <Button secondary>
                        GitHub
                    </Button>
                </ProjectContent>
                <ProjectPhoto props={SecondProject}>
                    <img src={SecondSampel} />
                </ProjectPhoto>
            </Project>
            <Project>
                <ProjectContent>
                    <h3>Landing Page</h3>
                    <p>
                        Aplikacja do zarzadzania zadaniami
                        dzięki niej łatwiej sledzić co jeszcze
                        musimy wykonać i jaki jest stan zadania.
                    </p>
                    <IntroSubTitle>
                        Technologie
                    </IntroSubTitle>
                    <p>REACT, TYPESCRIPT, FIREBASE, styled components</p>
                    <Button>
                        Uruchom
                    </Button>
                    <Button secondary>
                        GitHub
                    </Button>
                </ProjectContent>
                <ProjectPhoto props={ThirdSamepl}>
                    <img src={ThirdProject} />
                </ProjectPhoto>
            </Project>
        </PortfolioSectionWrapper>
    )
}

export default ProjectSection;