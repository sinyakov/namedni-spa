import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/seo';
import 'src/components/NamedniPage/NamedniPage.css';

export default function NamedniPage({ pageContext }) {
  const { year, youtube, prev, next, yearPhenomenas } = pageContext;
  const title = `Намедни-${year}`;
  console.log(yearPhenomenas);
  return (
    <Layout>
      <SEO title={`${title}`} />
      <Helmet
        bodyAttributes={{
          class: 'dark',
        }}
      />
      <main>
        <h1 className="namedniVideo__title">{title}</h1>
        <div className="videoWrapper">
          <iframe
            src={`https://www.youtube.com/embed/${youtube}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="phenomenaList">
          <h2>Феномены {year} года</h2>
          <div className="phenomenaList__inner">
            {yearPhenomenas.map(phenomena => (
              <Link
                className="phenomenaList__link"
                to={`/${phenomena.slug}.html`}
              >
                {phenomena.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="nav">
          {prev && (
            <a className="nav-link prev" href={`/namedni/${prev.year}`}>
              <YoutubePreview {...prev} />
            </a>
          )}
          {next && (
            <a className="nav-link next" href={`/namedni/${next.year}`}>
              <YoutubePreview {...next} />
            </a>
          )}
        </div>
      </main>
    </Layout>
  );
}

function YoutubePreview({ year, youtube }) {
  if (year < 1961) {
    return (
      <picture>
        <source
          srcSet={`https://i.ytimg.com/vi_webp/${youtube}/maxresdefault.webp`}
          type="image/webp"
        />
        <img
          className="video__sibling"
          src={`https://i.ytimg.com/vi/${youtube}/maxresdefault.jpg`}
          alt={year}
        />
      </picture>
    );
  }

  return (
    <img
      className="video__sibling"
      src={`https://img.youtube.com/vi/${youtube}/0.jpg`}
      alt={year}
    />
  );
}
