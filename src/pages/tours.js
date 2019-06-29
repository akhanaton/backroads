import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Tours from '../components/Tours/Tours';
import StyledHero from '../components/StyledHero';
import Layout from '../components/Layout';

const tours = ({ data }) => (
  <Layout>
    <StyledHero img={data.toursBcg.childImageSharp.fluid} />
    <Tours />
  </Layout>
);

tours.propTypes = {
  data: PropTypes.objectOf().isRequired,
};

export const query = graphql`
{
  toursBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`;

export default tours;
