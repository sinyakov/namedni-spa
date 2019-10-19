import React from 'react';
import Helmet from 'react-helmet';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/seo';
import 'src/components/ParfenonPage/ParfenonPage.css';

export default function ParfenonPage({ pageContext }) {
  const { title, youtube, prev, next } = pageContext;

  return (
    <Layout>
      <SEO title={`${title}`} />
      <Helmet
        bodyAttributes={{
          class: 'dark',
        }}
      />
      <main>
        <h1 className="parfenon__title">{title}</h1>
        <div className="videoWrapper">
          <iframe
            src={`https://www.youtube.com/embed/${youtube}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="nav">
          {prev && (
            <a className="nav-link prev" href={`/parfenon/${prev.youtube}`}>
              <picture>
                <source
                  srcSet={`https://i.ytimg.com/vi_webp/${
                    prev.youtube
                  }/maxresdefault.webp`}
                  type="image/webp"
                />
                <img
                  className="video__media"
                  src={`https://i.ytimg.com/vi/${
                    prev.youtube
                  }/maxresdefault.jpg`}
                  alt={prev.title}
                />
              </picture>
            </a>
          )}
          {next && (
            <a className="nav-link next" href={`/parfenon/${next.youtube}`}>
              <picture>
                <source
                  srcSet={`https://i.ytimg.com/vi_webp/${
                    next.youtube
                  }/maxresdefault.webp`}
                  type="image/webp"
                />
                <img
                  className="video__media"
                  src={`https://i.ytimg.com/vi/${
                    next.youtube
                  }/maxresdefault.jpg`}
                  alt={next.title}
                />
              </picture>
            </a>
          )}
        </div>
      </main>
    </Layout>
  );
}
