/* eslint-disable no-unused-vars */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Template = ({ data }) => {
  const {
    name, price, country, days, description: { description },
    images, start, journey,
  } = data.tour;

  const [mainImage, ...tourImages] = images;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

Template.propTypes = {
  data: PropTypes.objectOf().isRequired,
};

export const query = graphql`
query($id: String){
  tour:contentfulTour(id: { eq: $id} ){
    id
    name
    price
    country
    days
    start(formatString:"dddd MMMM Do, YYYY")
    description{
      description
    }
    journey{
      day
      info
    }
    images{
      fluid{
        src
      }
    }
  }
}
`;

export default Template;
