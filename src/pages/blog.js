import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import StyledHero from '../components/StyledHero';


import Layout from '../components/Layout';

const blog = ({ data }) => (
  <Layout>
    <StyledHero img={data.blogBcg.childImageSharp.fluid} />
  </Layout>
);

export const query = graphql`
{
  blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`;

blog.propTypes = {
  data: PropTypes.objectOf().isRequired,
};

export default blog;
