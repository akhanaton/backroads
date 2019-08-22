/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';

import styles from '../css/blog.module.css';
import BlogCard from '../components/Blog/BlogCard';
import Layout from '../components/Layout';
import Title from '../components/Title';

const Blog = (props) => {
  const { data } = props;
  const { currPage, numPages } = props.pageContext;
  const isFirstPage = currPage === 1;
  const isLastPage = currPage === numPages;
  const nextPage = `/blogs/${currPage + 1}`;
  const prevPage = currPage - 1 === 1 ? '/blogs' : `${currPage - 1}`;
  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => <BlogCard key={node.id} blog={node} />)}
        </div>
        <section className={styles.links}>
          {!isFirstPage && (
          <AniLink fade to={prevPage} className={styles.link}>
            Prev
          </AniLink>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <AniLink key={i} fade to={`/blogs/${i === 0 ? '' : i + 1}`} className={i + 1 === currPage ? `${styles.link} ${styles.active}` : `${styles.link}`}>
              { i + 1}
            </AniLink>
          ))}
          {!isLastPage && (
          <AniLink fade to={nextPage} className={styles.link}>
            Next
          </AniLink>
          )}
        </section>
      </section>
    </Layout>
  );
};

Blog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageContext: PropTypes.any.isRequired,
};


export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!){
  posts:allContentfulPost(skip: $skip, limit: $limit, sort: { fields: published, order:DESC})
  {
    edges{
      node{
        slug
        title
        id:contentful_id
        published(formatString:"MMMM Do, YYYY")
        image{
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`;

export default Blog;
