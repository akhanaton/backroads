import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';


import links from '../utils/links';
import socialLinks from '../utils/socialLinks';
import styles from '../css/footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      {links.map(item => <AniLink fade key={item.text} to={item.path}>{item.text}</AniLink>)}
    </div>
    <div className={styles.icons}>
      {socialLinks.map(item => <a href={item.url} key={item.name} target="_blank" rel="noopener noreferrer">{item.icon}</a>)}
    </div>
    <div className={styles.copyright}>
        copyright &copy; backroads travel company
      {' '}
      {new Date().getFullYear()}
      {' '}
all rights reserved
    </div>
  </footer>
);

export default Footer;
