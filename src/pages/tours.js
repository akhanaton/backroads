import React from 'react'
import { graphql } from 'gatsby'
import Tours from '../components/Tours/Tours'

import StyledHero from '../components/StyledHero'
import Layout from '../components/Layout'

const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.toursBcg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

export const query = graphql`
{
  toursBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`

export default tours
