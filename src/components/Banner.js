import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/banner.module.css';

const Banner = ({ title, info, children }) => (
  <div className={styles.banner}>
    <h1>{title}</h1>
    <p>{info}</p>
    {children}
  </div>
);


Banner.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Banner;
