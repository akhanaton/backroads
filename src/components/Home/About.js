import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Title from '../Title'
import styles from '../../css/about.module.css'

const getAboutImage = graphql`
query aboutImage {
  aboutImage: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us"/>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="landscape" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit atque sint?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit atque sint?</p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
