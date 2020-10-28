import React from "react"
import Header from "./Header"
import styled from 'styled-components'
import "./layout.css"

const LayoutWrapper = styled.div`
  display:grid;
  grid-template-columns:1rem 1fr 1fr 1rem;
  
  @media only screen and (min-width: 1200px) {
    grid-template-columns:1fr 600px 600px 1fr;
  } 
`;


const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  )
}



export default Layout
