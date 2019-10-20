import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import 'src/components/Layout/normalize.css';
import 'src/components/Layout/styles.css';

import Footer from 'src/components/Layout/Footer';
import Header from 'src/components/Layout/Header';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.SFC<IProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&amp;display=swap&amp;subset=cyrillic" rel="stylesheet" />
        </Helmet>
        <Header />
        <main className="main-content">
          <div className="wrapper">{children}</div>
        </main>
        <Footer />
      </>
    )}
  />
);

export default Layout;
