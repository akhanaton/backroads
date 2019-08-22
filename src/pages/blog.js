import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import StyledHero from '../components/StyledHero';
import BlogList from '../components/Blog/BlogList';
import Layout from '../components/Layout';

const blog = ({ data }) => (
  <Layout>
    <StyledHero img={data.blogBcg.childImageSharp.fluid} />
    <BlogList />
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
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
};

export default blog;
