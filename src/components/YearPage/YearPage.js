import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import React from "react";

import Layout from "../Layout/layout";
import SEO from "../seo";

export default class extends React.Component {
  state = {
    current: -1,
    currentPhenomena: null,
    left: 0,
    top: 0,
  };

  showPreview = (currentPhenomena, index) => () => {
    const display = "block";
    const borderRadius = index % 4 >= 2 ? "8px 0 0 8px" : "0 8px 8px 0";
    const top = `${Math.floor(index / 4) * 270}px`;
    const left = `${
      {
        0: 258,
        1: 258 * 2 + 12,
        2: 0,
        3: 258 + 12,
      }[index % 4]
    }px`;

    this.setState({
      current: index,
      currentPhenomena,
      previewStyle: {
        borderRadius,
        display,
        left,
        top,
      },
    });
  };

  hidePreview = () => {
    this.setState({
      previewStyle: { display: "none" },
      current: -1,
      currentPhenomena: null,
    });
  };

  render() {
    const { pageContext } = this.props;
    const { year, yearPhenomenas } = pageContext;

    const { previewStyle, current, currentPhenomena } = this.state;

    const prevYear = +year - 1;
    const nextYear = +year + 1;

    return (
      <Layout>
        <SEO title={`Год ${year}`} />
        <div className="page-title page-title--center page-title--years">
          <div className="year-title">
            {prevYear && (
              <div className="year-title__nearby-year year-title__nearby-year--prev">
                <a className="year-title__link" href={`/years/${prevYear}`}>
                  ← <span className="year-title__underline">{prevYear}</span>
                </a>
              </div>
            )}
            <h1 className="year-title__curr-year">{year}</h1>
            {nextYear && (
              <div className="year-title__nearby-year year-title__nearby-year--next">
                <a className="year-title__link" href={`/years/${nextYear}`}>
                  <span className="year-title__underline">{nextYear}</span> →
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="grid">
          {yearPhenomenas.map((phenomena, index) => (
            <Link
              className="grid__phenomena"
              key={phenomena.slug}
              to={`/${phenomena.slug}.html`}
              onMouseEnter={this.showPreview(phenomena, index)}
              onMouseLeave={this.hidePreview}
              css={{
                backgroundImage: `linear-gradient(rgba(25,25,25,9), rgba(25,0,0,.6)),
                                  url(https://namednibook.ru/img/phenomena/${year}/${
                  phenomena.slug
                }.jpg)`,
                borderRadius:
                  current === index
                    ? index % 4 < 2
                      ? "8px 0 0 8px"
                      : "0 8px 8px 0"
                    : "8px",
                ":hover": {
                  backgroundImage: `url(https://namednibook.ru/img/phenomena/${year}/${
                    phenomena.slug
                  }.jpg)`,
                },
              }}
            >
              {current !== index && phenomena.title}
            </Link>
          ))}
          <div className="grid__preview" style={previewStyle}>
            {currentPhenomena && (
              <>
                <h2>{currentPhenomena.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: currentPhenomena.excerpt }}
                />
              </>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

// GraphQL-запрос
// {
//   allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "2006"}}}}) {
//     edges {
//       node {
//         id
//         slug
//         excerpt
//       }
//     }
//   }
// }
