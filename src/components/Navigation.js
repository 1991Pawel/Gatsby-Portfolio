import React, { useState, createRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Logo from './Logo'

const ToggleButton = styled.button`
    display:block;
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin: 0;
    margin-left:auto;
    z-index:10;
    
    ${props => props.navbarOpen && css`
        position:fixed;
        top:1.8rem;
        right:1rem;
  `}

    @media only screen and (min-width: 600px) {
        display: none;
    } 

    span {
        width: 35px;
        height: 24px;
        display: inline-block;
        position: relative;
       span {
            width: 100%;
            height: 3px;
            background-color:${({ navbarOpen }) => navbarOpen ? 'transparent' : '#000'};
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            transition: background-color .1s .2s ease-in-out;
            &:before,
            &:after {
                    content: '';
                    left: 0;
                    transition: transform .2s .2s ease-in-out;
                    width: 100%;
                    height: 3px;
                    background-color: #000;
                    position: absolute;
                   
            }

            &:before {
                    top: -10px;
                    transform: ${({ navbarOpen }) => navbarOpen && 'translateY(10px) rotate(45deg)'}
            }
            &:after {
                    top: 10px;
                    transform: ${({ navbarOpen }) => navbarOpen && 'translateY(-10px) rotate(-45deg)'}
                    }
        }
    }
`;




const Nav = styled.nav`
    position: relative;
    display:flex;
    align-items:center;
    height:100%;
    max-width:1400px;
    margin:0 auto;



  ul {
    display:flex;

    @media only screen and (max-width: 600px) {
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        transform: ${({ navbarOpen }) => navbarOpen ? 'translateX(0)' : 'translateX(-100%)'};       
        transition: transform .3s;
        z-index:9;
        background-color:#FBFBFD;
    } 
    
    li {
        list-style:none;
        margin-left:2rem;
        text-transform:uppercase;

        @media only screen and (max-width: 600px) {
        margin-left:0;
        margin-bottom:2rem;
        }       
    }

    a {
        font-size:1.5rem;
        color:#000;
        text-decoration:none;

        @media only screen and (max-width: 600px) {
        font-size:2rem;
        color:#000;
        } 
    }
}`;


const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const yourElement = createRef();

    const handleCloseMenu = (e) => {
        if (yourElement.current && yourElement.current.contains(e.target)) {
            setNavbarOpen(false)
        }
    }


    useEffect(() => {
        window.addEventListener("click", handleCloseMenu);
        return () => {

            window.removeEventListener("click", handleCloseMenu);
        };
    });

    return (
        <Nav navbarOpen={navbarOpen}>
            <Logo />
            <ul ref={yourElement}>
                <li>
                    <AnchorLink to="/#intro" title="strona główna" />
                </li>
                <li>
                    <AnchorLink to="/#project" title="portfolio" />
                </li>
                <li>
                    <AnchorLink to="/#contact" title="kontakt" />
                </li>
            </ul>
            <ToggleButton
                aria-label="menu burger"
                navbarOpen={navbarOpen} onClick={() => setNavbarOpen((prevState) => !prevState)}>
                <span>
                    <span></span>
                </span>
            </ToggleButton>
        </Nav >
    )
}
export default Navigation
