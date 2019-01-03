import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class extends React.Component {
  state = {
    previewStyles: {},
    previewText: null,
    links: [],
  };

  markdown = React.createRef();

  componentDidMount() {
    const links = this.markdown.current.querySelectorAll('a');

    this.setState({ links });

    window.addEventListener('scroll', this.hidePreview);

    links.forEach(link => {
      link.addEventListener('mousemove', this.showPreview);
      link.addEventListener('mouseenter', this.changePreview);
      link.addEventListener('mouseleave', this.hidePreview);
    });
  }

  componentWillUnmount() {
    const { links } = this.state;

    window.removeEventListener('scroll', this.hidePreview);

    links.forEach(link => {
      link.removeEventListener('mousemove', this.showPreview);
      link.removeEventListener('mouseenter', this.changePreview);
      link.removeEventListener('mouseleave', this.hidePreview);
    });
  }

  showPreview = event => {
    this.setState({
      previewStyles: {
        display: 'block',
        top: event.clientY + 15,
        left: Math.min(event.clientX + 15, window.innerWidth - 400 - 15),
      },
    });
  };

  hidePreview = () => {
    this.setState({
      previewStyles: {
        display: 'none',
      },
    });
  };

  changePreview = event => {
    this.setState(() => ({
      previewText: (event.target.pathname + ' ').repeat(Math.random() * 6 + 3),
    }));
  };

  render() {
    const { data, pageContext } = this.props;
    const { title, content, categories, slug } = data.wordpressPost;
    const { yearPhenomenas } = pageContext;

    const { previewStyles, previewText, links } = this.state;

    const year = +categories[0].name;

    const hasImage = year <= 1940 || year >= 1995;
    const innerHTML = hasImage
      ? content.replace(
          '<!--more--></p>',
          `</p><img class="post__img" src="https://namednibook.ru/img/phenomena/${year}/${slug}.jpg">`
        )
      : content;

    return (
      <Layout>
        <SEO title={title} />
        <div className="post-wrapper">
          <article className="post">
            <h1 className="post__header">{title}</h1>
            <div>
              <div
                ref={this.markdown}
                className="post__content"
                dangerouslySetInnerHTML={{ __html: innerHTML }}
              />
              {links.length > 0 && (
                <div className="post-preview" style={previewStyles}>
                  {previewText}
                </div>
              )}
            </div>
            <div className="banner">
              <div className="banner__inner">
                <h2 className="banner__header">
                  Журналист Леонид&nbsp;Парфенов
                </h2>
                <p>
                  Автор телепроектов «Намедни» и{' '}
                  <a href="/ri/">«Российская империя»</a>. Пятикратный лауреат
                  ТЭФИ.
                </p>
                <p>
                  В настоящее время выпускает{' '}
                  <a href="/volumes/">тома «Намедни. Наша эра»</a>, описывающие
                  исторические явления по десятилетиям, и снимает документальные
                  фильмы (<a href="/zvorykin.html">«Зворыкин-Муромец»</a>,{' '}
                  <a href="/glaz-bozhij.html">«Глаз божий»</a>,{' '}
                  <a href="/tsvet-natsii.html">«Цвет нации»</a>,{' '}
                  <a href="/russkie-evrei-2.html">«Русские евреи»</a>).
                </p>
              </div>
            </div>
          </article>

          <aside className="sidebar">
            <div className="sidebar__year">
              <img
                className="sidebar__volume-cover"
                src=""
                alt="Том {{ volume }}"
              />
              <div className="sidebar__year-inner">
                <div className="year-title">
                  <div className="year-title__nearby-year year-title__nearby-year--prev sidebar__nearby-year sidebar__nearby-year--prev">
                    <a className="year-title__link" href={`/years/${year - 1}`}>
                      ←&nbsp;
                      <span className="year-title__underline">{year - 1}</span>
                    </a>
                  </div>
                  <div className="year-title__curr-year sidebar__curr-year">
                    <a href={`/years/${year}`}>{year}</a>
                  </div>
                  <div className="year-title__nearby-year year-title__nearby-year--next sidebar__nearby-year sidebar__nearby-year--next">
                    <a className="year-title__link" href={`/years/${year + 1}`}>
                      <span className="year-title__underline">{year + 1}</span>
                      &nbsp;→
                    </a>
                  </div>
                </div>
                <div className="sidebar__volume-link">
                  Из тома <a href="/volumes/{{ volume }}">{123}</a>
                </div>
              </div>
            </div>
            <div className="sidebar__phenomena">
              <h2 className="sidebar__header">
                Еще {yearPhenomenas.length - 1} феноменов {year} года
              </h2>
              <ul className="sidebar__phenomena-list">
                {yearPhenomenas
                  .filter(phenomena => phenomena.slug !== slug)
                  .map(phenomena => (
                    <li
                      className="phenomena-list__year-item"
                      key={phenomena.slug}
                    >
                      <Link to={`/${phenomena.slug}.html`}>
                        {phenomena.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      categories {
        name
      }
      slug
    }
  }
`;
