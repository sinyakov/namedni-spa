import { graphql, StaticQuery } from "gatsby";
import React from "react";

import "src/components/Layout/normalize.css";
import "src/components/Layout/styles.css";

import Footer from "src/components/Layout/Footer";
import Header from "src/components/Layout/Header";

interface IProps {
  children: JSX.Element | JSX.Element[];
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
