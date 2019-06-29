import React, { useState } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaAlignRight } from 'react-icons/fa';

import styles from '../css/navbar.module.css';
import links from '../utils/links';
import socialLinks from '../utils/socialLinks';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [isOpen, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!isOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button
            type="button"
            className={styles.logoBtn}
            onClick={toggleNav}
          >
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}`
          : `${styles.navLinks}`}
        >
          {links.map(item => (
            <li key={item.text}>
              <AniLink fade to={item.path}>
                {item.text}
              </AniLink>

            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialLinks.map(item => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
