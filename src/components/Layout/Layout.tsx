import { graphql, StaticQuery } from "gatsby";
import React from "react";

import "./normalize.css";
import "./styles.css";

import Footer from "./footer";
import Header from "./header";

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
