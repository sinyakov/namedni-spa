import React from 'react';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/seo';
import 'src/components/ParfenonPage/ParfenonPage.css';

export default function ParfenonPage({ pageContext }) {
  const { title, youtube, prev, next } = pageContext;
  console.log(pageContext);
  return (
    <Layout>
      <SEO title={`${title}`} />

      <main>
        <h1 className="parfenon__title">{title}</h1>
        <div class="videoWrapper">
          <iframe
            // width="1440"
            // height="652"
            src={`https://www.youtube.com/embed/${youtube}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <div className="nav">
          {prev && (
            <a class="nav-link prev" href={`/parfenon/${prev.youtube}.html`}>
              <picture>
                <source
                  srcset={`https://i.ytimg.com/vi_webp/${prev.youtube}/maxresdefault.webp`}
                  type="image/webp"
                />
                <img
                  class="video__media"
                  src={`https://i.ytimg.com/vi/${prev.youtube}/maxresdefault.jpg`}
                  alt={prev.title}
                />
              </picture>
            </a>
          )}
          {next && (
            <a class="nav-link next" href={`/parfenon/${next.youtube}.html`}>
              <picture>
                <source
                  srcset={`https://i.ytimg.com/vi_webp/${next.youtube}/maxresdefault.webp`}
                  type="image/webp"
                />
                <img
                  class="video__media"
                  src={`https://i.ytimg.com/vi/${next.youtube}/maxresdefault.jpg`}
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
