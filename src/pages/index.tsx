import { Link } from "gatsby";
import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Намедни. Наша Эра | Леонид Парфенов" />
    <Link to="/years">Список всех феноменов</Link>
  </Layout>
);

export default IndexPage;
