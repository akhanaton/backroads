const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
  query{
    tours:allContentfulTour{
      edges{
        node{
          id:contentful_id
          slug
        }
      }
    }

    posts:allContentfulPost{
      edges{
        node{
          id:contentful_id
          slug
        }
      }
    }
  }
  `);

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve('./src/templates/tour.js'),
      context: {
        slug: node.slug,
      },
    });
  });

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        slug: node.slug,
      },
    });
  });

  const posts = data.posts.edges;
  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blogs' : `/blogs/${i + 1}`,
      component: path.resolve('./src/templates/blog.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currPage: i + 1,
      },
    });
  });
};
