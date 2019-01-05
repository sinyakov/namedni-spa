const path = require(`path`);
const cheerio = require('cheerio');
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
              content
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
      excerpt: node.excerpt,
      year,
    };
  });

  phenomenasRaw.forEach(({ node }) => {
    const year = node.categories[0].name;
    const $ = cheerio.load(node.content);
    const links = $('a');
    const slugs = links
      .map((i, el) => $(el).attr('href'))
      .get()
      .map(x => x.slice(1, -5));

    createPage({
      path: `/${node.slug}.html`,
      component: phenomenaTemplate,
      context: {
        id: node.id,
        meta: _.pick(phenomenasMeta, slugs),
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

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                title
                category
              }
              fileAbsolutePath
            }
          }
        }
      }
    `
  );

  const volumeTemplate = path.resolve(
    './src/components/VolumePage/VolumePage.tsx'
  );

  const markdowns = allMarkdown.data.allMarkdownRemark.edges;
  const riArticles = {};

  markdowns.forEach(({ node }) => {
    const {
      html,
      frontmatter: { title },
      fileAbsolutePath,
    } = node;

    const absolutePath = fileAbsolutePath.split('/');
    const start = _.lastIndexOf(absolutePath, 'content');
    const relativePath = absolutePath.slice(start + 1);
    const last = relativePath.pop().replace(/md$/, 'html');

    relativePath.push(last);

    if (relativePath[0] === 'video') return;
    if (relativePath[0] === 'ri-contents') return;

    if (relativePath[0] === 'volumes') {
      const volume = relativePath[1].split('.')[0];

      createPage({
        path: `/volumes/${volume}`,
        component: volumeTemplate,
        context: {
          html,
          volume,
          phenomenasByYear,
        },
      });
    }

    if (relativePath[0] === 'ri') {
      const category = relativePath[1];
      const index = +relativePath[2].split('.')[0];

      if (!riArticles[category]) {
        riArticles[category] = [];
      }

      riArticles[category][index - 1] = {
        category,
        title,
        html,
        index,
      };
    }
  });

  const riTemplate = path.resolve('./src/components/RiPage/RiPage.tsx');

  Object.keys(riArticles).forEach(category => {
    riArticles[category].forEach(({ html, title, index }) => {
      createPage({
        path: `/ri/${category}/${index}.html`,
        component: riTemplate,
        context: {
          html,
          title,
          category,
          index,
          chapters: riArticles[category].map(({ html, ...rest }) => rest),
        },
      });
    });
  });
};
