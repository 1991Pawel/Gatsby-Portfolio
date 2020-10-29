import React from "react"
import Layout from '../components/Layout'
import IntroSection from '../templates/IntroSection'
import ProjectSection from '../templates/ProjectSection'
import ContactSection from '../templates/ContactSection'






const IndexPage = () => (
  <Layout>
    <IntroSection id="intro" />
    <ProjectSection id="project" />
    <ContactSection />
  </Layout>
)

export default IndexPage
