import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../../css/blog-card.module.css';

const BlogCard = ({ blog }) => {
  const {
    slug, title, image, published,
  } = blog;

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="post" />
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}>
          {published}
        </h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    published: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
  }).isRequired,
};

export default BlogCard;
