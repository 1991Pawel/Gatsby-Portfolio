import styled, { css } from 'styled-components'

export const Button = styled.button`
   height:4rem;
   min-width:12rem;
   background:#000;
   color:#fff;
   border:none;
   text-transform:uppercase;
   cursor: pointer;
   margin:3rem 0;
   ${props => props.secondary && css`
    background: white;
    color: black;
    border:1px solid black;
   margin-left:2rem;
  `}
`;