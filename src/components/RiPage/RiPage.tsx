import { Link } from "gatsby";
import React from "react";

import Layout from "src/components/Layout/Layout";
import SEO from "src/components/seo";
import { IRuler, rulers } from "src/constants/ri";

interface IChapter {
  title: string;
  category: string;
  index: number;
}

interface IProps {
  pageContext: {
    html: string;
    category: IRuler;
    title: string;
    chapters: IChapter[];
    index: number;
  };
}

const RiPage: React.SFC<IProps> = ({ pageContext }) => {
  const { html, index, title, chapters, category } = pageContext;
  console.log({ rulers, category });

  return (
    <Layout>
      <SEO title={`${title} — ${rulers[category]}`} />
      <div className="ri-wrapper">
        <h1 className="ri-title__header">
          <span className="ri-title__section">Глава {index}</span> {title}
        </h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />
        <aside className="sidebar">
          <ol>
            {chapters.map(chapter => (
              <li key={chapter.index}>
                {chapter.index !== index ? (
                  <Link to={`/ri/${chapter.category}/${chapter.index}.html`}>
                    {chapter.title}
                  </Link>
                ) : (
                  chapter.title
                )}
              </li>
            ))}
          </ol>
        </aside>

        <section className="ri-preview">
          <div className="ri-preview__inner">
            <h2 className="ri-preview__title">Сериал «Российская империя»</h2>
            <p>
              16-серийный проект Леонида Парфенова об истории российского
              государства с 1697 по 1917 год, выпущенный к 300-летию основания
              Российской империи.
            </p>
            <p>
              Через десять лет вышла серия книг «Российская империя»,
              повторяющая телеверсию.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RiPage;
