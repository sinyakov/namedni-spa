import React from 'react';

import Layout from '../Layout/layout';
import SEO from '../seo';

import { AboutBanner } from './AboutBanner';
import { CurrentYearBlock } from './sidebar/currentYearBlock';
import { PhenomenasList } from './sidebar/PhenomenasList';
import { isYearHasImage } from '../../utils/isYearHasImage'

export default class extends React.Component {
  render() {
    const { pageContext } = this.props;
    const { yearPhenomenas, title, content, categories, slug } = pageContext;
    const otherPhenomenas = yearPhenomenas.filter(
      phenomena => phenomena.slug !== slug
    );

    const year = +categories[0].name;

    const hasImage = isYearHasImage(year);
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
                className="post__content"
                dangerouslySetInnerHTML={{ __html: innerHTML }}
              />
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
