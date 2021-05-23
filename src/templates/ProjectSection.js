import React from "react"
import styled, { keyframes } from "styled-components"
import { Button } from "../components/Button"
import { TextDecoration } from "../components/TextDecoration"



import FirstProject from "../images/first.jpg"
import FirstSampel from "../images/first-sampel.jpg"
import SecondProject from "../images/second-project.jpg"
import SecondSampel from "../images/second-sampel.jpg"
import ThirdProject from "../images/third-project.png"
import ThirdSamepl from "../images/third-sampel.png"
import FourProject from "../images/four-project.jpg"
import FourSampel from "../images/four-sampel.jpg"
import FiveSampel from "../images/five-sampel.jpg"
import FiveProject from "../images/five-project.jpg"
import SixProject from "../images/six-project.jpg"
import SixSampel from "../images/six-sampel.jpg"
import SevenProject from "../images/seven-project.jpg"
import SevenSampel from "../images/seven-sampel.jpg"

const leftSide = keyframes`
  0%, 100% {
    transform:translate(-20%,-48%);
  }
  50% {
    transform:translate(-20%,-52%);
  }
}`

const rightSide = keyframes`
 0%, 100% {
    transform:translate(-80%,-52%);
  }
  50% {
    transform:translate(-80%,-48%);
  }
}

`

const PortfolioSectionWrapper = styled.section`
  grid-column: 2 / span 2;
  padding: 3rem 0;

  h2 {
    text-align: center;

    @media only screen and (min-width: 800px) {
      margin-bottom: 10rem;
    }
  }

  h3 {
    font-weight: 600;
  }
`

const ProjectContent = styled.div`
  width: 100%;
  p:first-of-type {
    margin: 2rem 0;
  }

  span {
    font-size: 1.8rem;
  }

  p:last-of-type {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    span {
      text-align: center;
      font-size: 1.5rem;
      display: block;
      margin: 0.5rem;
      background-color: #f0f0f0;
      padding: 0.2rem 0.8rem;
      border-radius: 0.3rem;
      color: #424242;
    }
  }

  @media only screen and (min-width: 600px) {
    max-width: 500px;
  }

  @media only screen and (min-width: 800px) {
    max-width: 400px;
  }
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7rem 0;
  img {
    @media only screen and (min-width: 800px) {
      animation-name: ${rightSide};
      animation-duration: 6s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }

  &:nth-of-type(even) {
    ${ProjectContent} {
      @media only screen and (min-width: 800px) {
        order: 2;
      }
    }
    img:nth-of-type(1) {
      @media only screen and (min-width: 800px) {
        transform: translate(-20%, -50%);
        animation-name: ${leftSide};
        animation-duration: 6s;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
    }
  }

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10rem 0;
  }

  @media only screen and (min-width: 1200px) {
    margin: 12rem 0;
  }
`

const ProjectPhoto = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  background-image: url(${({ props }) => props});
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (min-width: 600px) {
    height: 500px;
    width: 100%;
  }

  @media only screen and (min-width: 800px) {
    max-width: 40%;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 80%;
    max-width: 80%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.3));

    @media only screen and (min-width: 800px) {
      transform: translate(-80%, -50%);
    }
  }
`

const ProjectSection = () => {
  return (
    <PortfolioSectionWrapper id="project">
      <h2>Portfolio</h2>
      <Project>
        <ProjectContent>
          <h3>Landing Page</h3>
          <p>
            Strona dla firmy zajmującej się hydrauliką. 
          </p>
          <TextDecoration>Technologie</TextDecoration>
          <p>
            <span>HTML</span>
            <span>SCSS</span>
            <span>JS</span>
            <span>PARCEL</span>
          </p>
          <Button target="_blank" rel="noreferrer" href="https://www.santop.bialystok.pl/">
            Uruchom
          </Button>
          <Button
            secondary
            target="_blank"
            rel="noreferrer"
            href="https://github.com/1991Pawel/santop"
          >
            GitHub
          </Button>
        </ProjectContent>
        <ProjectPhoto props={SevenProject}>
          <img src={SevenSampel} alt="simple website" />
        </ProjectPhoto>
      </Project>
      <Project>
        <ProjectContent>
          <h3>Landing Page</h3>
          <p>
            Komercyjny projekt wykonany dla fotografa, strona posiada połączenie
            z headless CMS.
          </p>
          <TextDecoration>Technologie</TextDecoration>
          <p>
            <span>HTML</span>
            <span>SCSS</span>
            <span>GATSBY</span>
            <span>GRAPHQL</span>
            <span>DATOCMS</span>
          </p>
          <Button target="_blank" rel="noreferrer" href="http://wrocenski.pl">
            Uruchom
          </Button>
          <Button
            secondary
            target="_blank"
            rel="noreferrer"
            href="https://github.com/1991Pawel/gatsby-cms"
          >
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
          <p>Komercyjny projekt wykonany dla trenera sportów sylwetkowych.</p>
          <TextDecoration>Technologie</TextDecoration>
          <p>
            <span>NEXT.JS</span>
            <span>SCSS</span>
            <span>REACT-QUERY</span>
          </p>
          <Button
            target="_blank"
            rel="noreferrer"
            href="http://korzeniecka.pl/"
          >
            Uruchom
          </Button>
          <Button
            secondary
            target="_blank"
            rel="noreferrer"
            href="https://github.com/1991Pawel/fitness-website"
          >
            GitHub
          </Button>
        </ProjectContent>
        <ProjectPhoto props={SecondProject}>
          <img src={SecondSampel} alt="project fitness website" />
        </ProjectPhoto>
      </Project>
      <Project>
        <ProjectContent>
          <h3>Koszyk sklepu</h3>
          <p>
            Aplikacja w trakcie budowy, aktualnie obsługuje dodawanie i usuwanie
            produktów z koszyka oraz logowanie i rejestracje użytkownika.
          </p>
          <TextDecoration>Technologie</TextDecoration>
          <p>
            <span>NEXT.JS</span>
            <span>BCRYPT</span>
            <span>NODE</span>
            <span>EXPRESS</span>
            <span>MONGODB</span>
          </p>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://beststore.vercel.app/"
          >
            Uruchom
          </Button>
          <Button
            secondary
            target="_blank"
            rel="noreferrer"
            href="https://github.com/1991Pawel/e-comerce-next"
          >
            GitHub
          </Button>
        </ProjectContent>
        <ProjectPhoto props={FiveSampel}>
          <img src={FiveProject} alt="store project" />
        </ProjectPhoto>
      </Project>
      <Project>
        <ProjectContent>
          <h3>YourTask</h3>
          <p>Aplikacja do zarządzania zadaniami.</p>
          <TextDecoration>Technologie</TextDecoration>
          <p>
            <span>REACT</span>
            <span>TYPESCRIPT</span>
            <span>FIREBASE</span>
            <span>STYLED COMPONENTS</span>
          </p>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://yourtaskapp.netlify.app/"
          >
            Uruchom
          </Button>
          <Button
            secondary
            target="_blank"
            rel="noreferrer"
            href="https://github.com/1991Pawel/react-firebase"
          >
            GitHub
          </Button>
        </ProjectContent>
        <ProjectPhoto props={ThirdSamepl}>
          <img src={ThirdProject} alt="project todo app" />
        </ProjectPhoto>
      </Project>
      <Project>
        <ProjectContent>
          <h3>Gra Refleks</h3>
          <p>
            Rozgrywka polega na trafieniu jak najwiecej razy Homera Simpsona
            przed upływem czasu.
          </p>
          <TextDecoration>Technologie</TextDecoration>
          <p>
            <span>REACT</span>
            <span>TYPESCRIPT</span>
          </p>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://reflex-game.netlify.app/"
          >
            Uruchom
          </Button>
          <Button
            secondary
            target="_blank"
            rel="noreferrer"
            href="https://github.com/1991Pawel/reflex-game"
          >
            GitHub
          </Button>
        </ProjectContent>
        <ProjectPhoto props={SixProject}>
          <img src={SixSampel} alt="Reflex game" />
        </ProjectPhoto>
      </Project>
      <Project>
        <ProjectContent>
          <h3>Landing Page</h3>
          <p>
            Strona wykonana na zlecenie zagranicznego klienta pod dostarczony
            layout.
          </p>
          <TextDecoration>Technologie</TextDecoration>
          <p>
            <span>HTML</span>
            <span>REACT-SLICK</span>
            <span>REACT-QUERY</span>
            <span>GATSBY</span>
            <span>SCSS</span>
          </p>
          <Button
            target="_blank"
            rel="noreferrer"
            href="http://www.newhomecabinets.com/"
          >
            Uruchom
          </Button>
          <Button
            secondary
            target="_blank"
            rel="noreferrer"
            href="https://github.com/1991Pawel/newhomecabinets"
          >
            GitHub
          </Button>
        </ProjectContent>
        <ProjectPhoto props={FourSampel}>
          <img src={FourProject} alt="project todo app" />
        </ProjectPhoto>
      </Project>
    </PortfolioSectionWrapper>
  )
}

export default ProjectSection
