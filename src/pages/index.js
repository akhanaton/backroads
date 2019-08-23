import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';


import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import FeaturedTour from '../components/Home/FeaturedTour';
import SEO from '../components/SEO';


const index = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero home img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="continue exploring" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, molestias.">
        <AniLink fade className="btn-white" to="/tours">explore tours</AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTour />
  </Layout>
);

index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
};


export const query = graphql`
{
  defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`;


export default index;
