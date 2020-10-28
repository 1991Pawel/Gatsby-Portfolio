import React from "react"
import Header from "./Header"
import styled from 'styled-components'
import "./layout.css"

const LayoutWrapper = styled.div`
  display:grid;
  grid-template-columns:1rem 1fr 1fr 1rem;
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
