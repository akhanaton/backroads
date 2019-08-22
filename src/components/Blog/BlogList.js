import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Title from '../Title';
import BlogCard from './BlogCard';
import styles from '../../css/blog.module.css';

const getPosts = graphql`
query{
posts:allContentfulPost(sort: { fields: published, order:DESC } ){
    edges{
      node {
        id: contentful_id
        title
        slug
        published(formatString: "MMMM Do, YYYY")
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

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts);
  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blog" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => <BlogCard key={node.id} blog={node} />)}
      </div>
    </section>
  );
};

export default BlogList;
