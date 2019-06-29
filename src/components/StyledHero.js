import React from 'react';
import { useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';

import { getDefaultImage } from './Tours/Tour';

const StyledHero = ({
  img, className, children, home,
}) => {
  const { defaultImage } = useStaticQuery(getDefaultImage);
  return (
    <BackgroundImage
      className={className}
      fluid={img || defaultImage.childImageSharp.fluid}
      home={home}
    >
      {children}
    </BackgroundImage>
  );
};

StyledHero.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  img: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  home: PropTypes.string,
};

StyledHero.defaultProps = {
  home: false,
};

export default styled(StyledHero)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '50vh')};
  background: ${props => (props.home ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))' : 'none')};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
