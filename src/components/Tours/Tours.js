import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

import TourList from './TourList'

const getTours = graphql`
 query{
  tours: allContentfulTour {
    edges {
      node {
        id: contentful_id
        name
        slug
        price
        country
        days
        images {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}`

const Tours = () => {
  const { tours: { edges } } = useStaticQuery(getTours);
  return (
    <div>
      <TourList tours={ edges } />
    </div>
  )
}

export default Tours
