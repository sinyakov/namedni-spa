const path = require(`path`);
const _ = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              title
              excerpt
              categories {
                name
              }
            }
          }
        }
      }
    `
  );

  const phenomenaTemplate = path.resolve('./src/templates/phenomena.js');

  const phenomenas = result.data.allWordpressPost.edges.map(({ node }) => ({
    slug: node.slug,
    title: node.title,
    year: node.categories[0].name,
  }));

  const phenomenasMeta = {};
  const phenomenasByYear = _.groupBy(phenomenas, 'year');

  result.data.allWordpressPost.edges.forEach(({ node }) => {
    const year = node.categories[0].name;

    phenomenasMeta[node.slug] = {
      title: node.title,
      year,
    };

    createPage({
      path: `/${node.slug}.html`,
      component: phenomenaTemplate,
      context: {
        id: node.id,
        // meta: phenomenasMeta,
        yearPhenomenas: phenomenasByYear[year],
      },
    });
  });
};
