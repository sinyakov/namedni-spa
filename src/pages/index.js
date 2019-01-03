import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Намедни. Наша Эра | Леонид Парфенов" />
    <Link to="/years">Список всех феноменов</Link>
  </Layout>
);

export default IndexPage;
