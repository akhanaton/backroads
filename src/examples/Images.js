import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


import styled from 'styled-components';
import Img from 'gatsby-image';
import img from '../images/connectBcg.jpeg';

const StyledImages = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article{
    border: 3px solid red;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;

const getImages = graphql`
  query Images {
  fixed: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fixed(width: 270, grayscale: true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "blogBcg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`;

const Images = () => {
  const data = useStaticQuery(getImages);

  return (
    <StyledImages>
      <article>
        <h3>basic image</h3>
        <img src={img} alt="basic" className="basic" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </StyledImages>
  );
};

export default Images;
