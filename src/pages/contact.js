import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import StyledHero from '../components/StyledHero';
import Contact from '../components/Contact/Contact';
import Layout from '../components/Layout';

const contact = ({ data }) => (
  <Layout>
    <StyledHero img={data.contactBcg.childImageSharp.fluid} />
    <Contact />
  </Layout>
);

contact.propTypes = {
  data: PropTypes.objectOf().isRequired,
};

export const query = graphql`
{
  contactBcg: file(relativePath: {eq: "connectBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`;

export default contact;
