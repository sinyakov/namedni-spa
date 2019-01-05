import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../Layout/layout';
import SEO from '../seo';

import { AboutBanner } from './AboutBanner';
import { CurrentYearBlock } from './sidebar/currentYearBlock';
import { PhenomenasList } from './sidebar/PhenomenasList';

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
    const otherPhenomenas = yearPhenomenas.filter(
      phenomena => phenomena.slug !== slug
    );

    const { previewStyles, previewText, links } = this.state;

    const year = +categories[0].name;

    const hasImage = year <= 1940 || year >= 1995;
    const innerHTML = hasImage
      ? content.replace(
          '<!--more--></p>',
          `</p><img class="post__img" src="/img/phenomena/${year}/${slug}.jpg">`
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
            <div className="post__banner">
              <AboutBanner />
            </div>
          </article>

          <aside className="sidebar">
            <CurrentYearBlock year={year} />
            <PhenomenasList year={year} phenomenas={otherPhenomenas} />
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
