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

  const phenomenaTemplate = path.resolve(
    './src/components/PhenomenaPage/PhenomenaPage.js'
  );
  const phenomenasRaw = result.data.allWordpressPost.edges;

  const phenomenas = phenomenasRaw.map(({ node }) => ({
    slug: node.slug,
    title: node.title,
    excerpt: node.excerpt,
    year: node.categories[0].name,
  }));

  const phenomenasMeta = {};
  const phenomenasByYear = _.groupBy(phenomenas, 'year');

  phenomenasRaw.forEach(({ node }) => {
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

  const yearTemplate = path.resolve('./src/components/YearPage/YearPage.js');

  _.keys(phenomenasByYear).map(year => {
    createPage({
      path: `/years/${year}`,
      component: yearTemplate,
      context: {
        year,
        yearPhenomenas: phenomenasByYear[year],
      },
    });
  });
};
