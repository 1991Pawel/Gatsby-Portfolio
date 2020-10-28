import React, { useState } from 'react'
import styled from 'styled-components'
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
    height:8rem;

    @media only screen and (min-width: 600px) {
     
     height:10rem;
  
    } 


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
        background-color:#0077ED;
        transition: transform .3s;
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
        } 
    }
}`;


const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Nav navbarOpen={navbarOpen}>
            <Logo />
            <ul>
                <li>
                    <a href="">Start</a>
                </li>
                <li>
                    <a href="">Portfolio</a>
                </li>
                <li>
                    <a href="">O mnie</a>
                </li>
                <li>
                    <a href="">Kontakt</a>
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
