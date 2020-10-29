import styled from 'styled-components';

export const TextDecoration = styled.span`
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

@media only screen and (min-width: 800px) {  
    font-size:2rem;
  } 
`;