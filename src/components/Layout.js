import React from 'react';
import PropTypes from 'prop-types';


import Navbar from './Navbar';
import Footer from './Footer';
import '../css/layout.css';

const Layout = ({ children }) => (
  <>
    <Navbar />
    { children }
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
