import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { useStaticQuery, graphql } from 'gatsby';


const getSiteMetaData = graphql`
query{
  site{
    siteMetadata{
      siteTitle:title
      siteDesc:description
      author
      siteUrl
      image
      twitterUsername
    }
  }
}
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getSiteMetaData);
  const {
    siteDesc, siteTitle, siteUrl, image, twitterUsername,
  } = site.siteMetadata;
  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter" content={twitterUsername} />
      <meta name="site" content={siteUrl} />
    </Helmet>
  );
};


SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SEO;
