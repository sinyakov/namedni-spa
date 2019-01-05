import { Link } from "gatsby";
import _ from "lodash";
import React from "react";

import { volumes } from "src/constants/volumes";

import Layout from "src/components/Layout/Layout";
import SEO from "src/components/seo";

interface IProps {
  pageContext: {
    html: string;
    volume: string;
    phenomenasByYear: any;
  };
}

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

const VolumePage: React.SFC<IProps> = ({ pageContext }) => {
  const { html, volume, phenomenasByYear } = pageContext;
  const [start, end] = volume.split("-").map(Number);

  const released = ![
    "1911-1920",
    "1921-1930",
    "1918-1930",
    "2011-2015",
  ].includes(volume);

  return (
    <Layout>
      <SEO title={`Том ${volume}`} />
      <h1 className="post__header">Том «{volume}»</h1>

      <article className="volume">
        <div
          className="volume__text"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <img
          className="volume__img"
          src={`/img/volumes/covers/${volume}.jpg`}
          alt={`Намедни ${volume}.`}
        />
      </article>

      {released && (
        <>
          <h2 className="volume__phenomena-header">Феномены {volume}</h2>
          <ul className="phenomena-list">
            {_.chain(phenomenasByYear)
              .keys()
              .filter(y => start <= +y && +y <= end)
              .sortBy()
              .map(year => renderYear(phenomenasByYear, year))
              .value()}
          </ul>
        </>
      )}

      <h2 className="volume__phenomena-header">Другие тома «Намедни»</h2>
      <ul className="volume-list">
        {Object.keys(volumes).map(vol => (
          <li className="volume-item">
            <Link className="volume-item__wrapper" to={`/volumes/${vol}/`}>
              <img
                src={`/img/volumes/covers/${vol}.jpg`}
                alt={`Намедни ${vol}.`}
                title={`Том «Намедни ${vol}»`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default VolumePage;
