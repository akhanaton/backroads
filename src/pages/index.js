import React from "react"
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'


export default ({ data }) => 
(
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title="continue exploring" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, molestias.">
          <AniLink fade className="btn-white" to="/tours">explore tours</AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
)

export const query = graphql`
{
  defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`
