/* eslint-disable no-unused-vars */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import styles from '../css/template.module.css';
import Day from '../components/Tours/Day';

const Template = ({ data }) => {
  const {
    name, price, country, days, description: { description },
    images, start, journey,
  } = data.tour;

  const [mainImage, ...tourImages] = images;
  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map(item => <Img key={item.fluid.src} fluid={item.fluid} alt="single tour" className={styles.image} />)}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from $
              {price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>
starts on:
            {' '}
            {start}
          </h4>
          <h4>
            duration:
            {' '}
            {`${days} days`}
          </h4>
          <p className={styles.desc}>
            {description}
          </p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map(item => <Day key={item.id} day={item.day} info={item.info} />)}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

Template.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
};

export const query = graphql`
query($slug: String){
  tour:contentfulTour(slug: { eq: $slug} ){
    name
    price
    country
    days
    start(formatString:"dddd MMMM Do, YYYY")
    description{
      description
    }
    journey{
      id
      day
      info
    }
    images{
      fluid{
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
}
`;

export default Template;
