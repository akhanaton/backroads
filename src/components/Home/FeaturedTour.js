import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useStaticQuery, graphql } from 'gatsby';
import Tour from '../Tours/Tour';

import Title from '../Title';
import styles from '../../css/items.module.css';

export const getFeaturedTours = graphql`
query{
  featuredTours: allContentfulTour(filter: { featured: { eq: true }  }) {
    edges {
      node {
        id: contentful_id
        name
        slug
        price
        country
        days
        images {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`;

const FeaturedTour = () => {
  const response = useStaticQuery(getFeaturedTours);
  const tours = response.featuredTours.edges;
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => <Tour key={node.id} tour={node} />)}
      </div>
      <AniLink fade to="/tours" className="btn-primary">all tours</AniLink>
    </section>
  );
};
export default FeaturedTour;
