import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import styles from '../css/single-blog.module.css';

const Post = ({ data }) => {
  const { title, published, text: { json } } = data.post;
  const options = {
    renderNode: {
      // eslint-disable-next-line no-unused-vars
      'embedded-asset-block': node => (
        <div className="rich">
          <h3>
            this is awesome image
          </h3>
          <img width="400" src={node.data.target.fields.file['en-US'].url} alt="test" />
          <p>images provided by john doe</p>
        </div>
      ),
      // eslint-disable-next-line no-unused-vars
      'embedded-entry-block': (node) => {
        // eslint-disable-next-line no-shadow
        const { title, image, text } = node.data.target.fields;
        return (
          <div>
            <br />
            <br />
            <br />
            <h1>{title['en-US']}</h1>
            <img width="400" src={image['en-US'].fields.file['en-US'].url} alt="" />
            {documentToReactComponents(text['en-US'])}
            <br />
            <br />
            <br />
          </div>
        );
      },
    },

  };
  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>
            published on:
            {' '}
            {published}
          </h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
};


export const query = graphql`
query getPost($slug: String!) {
  post: contentfulPost(slug:{ eq: $slug }) {
    title
    published(formatString:"MMMM Do, YYYY")
    text{
      json
    }
  }
}
`;

export default Post;
