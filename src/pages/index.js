import React from "react"
import Layout from '../components/Layout'
import IntroSection from '../templates/IntroSection'
import ProjectSection from '../templates/ProjectSection'
import ContactSection from '../templates/ContactSection'






const IndexPage = () => (
  <Layout>
    <IntroSection />
    <ProjectSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
