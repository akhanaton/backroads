import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => (
  <Helmet htmlAttributes={{ lang: 'en' }} title={title}>
    <meta name="description" content={description} />
  </Helmet>
);

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SEO;
