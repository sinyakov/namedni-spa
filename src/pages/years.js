import React from 'react';
import { Link, graphql } from 'gatsby';
import _ from 'lodash/';

import Layout from '../components/layout';
import SEO from '../components/seo';

const renderYear = (groups, year) => (
  <li className="phenomena-list__item" key={year}>
    <Link
      className="phenomena-list__year-link"
      to={`/years/${year}`}
      title={`Феномены ${year} года`}
    >
      {year}
    </Link>
    <ul className="phenomena-list__year-list">
      {groups[year].map(({ slug, title }) => (
        <li className="phenomena-list__year-item" key={slug}>
          <Link to={`/${slug}.html`} title={`${title}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

const SecondPage = ({ data }) => {
  const { edges } = data.allWordpressPost;
  const groups = _.chain(edges)
    .map(({ node: { slug, title, categories } }) => ({
      slug,
      title,
      year: categories[0].name,
    }))
    .groupBy('year')
    .value();

  return (
    <Layout>
      <SEO title="Феномены по годам" />
      <h1>Феномены по годам</h1>
      <ul className="phenomena-list">
        {_.chain(groups)
          .keys()
          .sortBy()
          .map(year => renderYear(groups, year))
          .value()}
      </ul>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          slug
          categories {
            name
          }
        }
      }
    }
  }
`;
export default SecondPage;
