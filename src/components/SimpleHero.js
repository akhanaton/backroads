import React from 'react';
import PropTypes from 'prop-types';

const SimpleHero = ({ children }) => (
  <header className="defaultHero">
    {children}
  </header>
);

SimpleHero.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SimpleHero;
