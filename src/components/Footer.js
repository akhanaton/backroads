import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";


import links from '../utils/links'
import socialLinks from '../utils/socialLinks'
import styles from '../css/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return <AniLink fade key={index} to={item.path}>{item.text}</AniLink>
        })}
      </div>
      <div className={styles.icons}>
        {socialLinks.map((item, index) => {
          return <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">{item.icon}</a>
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all rights reserved
      </div>
    </footer>
  )
}

export default Footer
