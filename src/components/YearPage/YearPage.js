import { jsx } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import _ from 'lodash';
import cx from 'classnames';

import Layout from '../Layout/layout';
import SEO from '../seo';
import { computeNearYears } from '../../utils/computeNearYears';
import { getVolumeByYear } from '../../utils/getVolumeByYear';
import { computeYearsInterval } from '../../utils/computeYearsInterval';
import { AboutBanner } from '../PhenomenaPage/AboutBanner';
import './YearPage.css';

export default class extends React.Component {
  render() {
    const { pageContext } = this.props;
    const { year, yearPhenomenas } = pageContext;
    const { prevYear, nextYear } = computeNearYears(+year);

    const phenomenas = roundPhenomenasCount(yearPhenomenas);
    const volumeYears = computeYearsInterval(+year);

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
          {phenomenas.map(({ title, slug, long }) => {
            const imgPath = `/img/phenomena/${year}/${slug}.jpg`;
            const classname = cx(
              'grid__phenomena',
              long && 'grid__phenomena_long'
            );

            return (
              <Link
                className={classname}
                key={slug}
                to={`/${slug}.html`}
                css={{
                  backgroundImage: `linear-gradient(rgba(25,25,25,.75), rgba(25,0,0,.5)), url(${imgPath})`,
                  ':hover': {
                    backgroundImage: `linear-gradient(rgba(25,25,25,.9), rgba(25,0,0,.7)), url(${imgPath})`,
                  },
                }}
              >
                {title}
              </Link>
            );
          })}
        </div>

        <footer className="year__footer">
          <div className="year__foter-list">
            {volumeYears.map(y =>
              +year === y ? (
                <span className="year__foter-item year__foter-item_current">
                  {y}
                </span>
              ) : (
                <Link to={`/years/${y}`} className="year__foter-item">
                  {y}
                </Link>
              )
            )}
          </div>
          <div className="year__footer-left">
            <AboutBanner />
          </div>
          <Link to={`/namedni/${year}`} className="year__footer-right">
            <div className="namedniFooter">
              {/* <h2 className="banner__header">Смотреть видеоверсию 📺</h2> */}
              <ul>
                <li className="namedniFooter__item">
                  <strong className="namedniFooter__title">Намедни 1946-1960</strong>
                  <br />
                  на ютюб-канале «Парфенон»
                </li>
                <li className="namedniFooter__item">
                  <strong className="namedniFooter__title">Намедни 1961-2000</strong>
                  <br />в классической зеленой студии
                </li>
                <li className="namedniFooter__item">
                  <strong className="namedniFooter__title">Намедни 2001-2003</strong>
                  <br />в рамках информационно-аналитической программы «Намедни»
                </li>
              </ul>
            </div>
          </Link>
        </footer>
      </Layout>
    );
  }
}

function roundPhenomenasCount(yearPhenomenas) {
  const lack = 4 - (yearPhenomenas.length % 4);

  if (lack === 4) {
    return yearPhenomenas;
  }

  const longest = _.chain(yearPhenomenas)
    .sortBy(({ title }) => title.length)
    .reverse()
    .take(lack)
    .map(({ slug }) => slug)
    .value();

  const res = yearPhenomenas.map(phenomena => ({
    ...phenomena,
    long: longest.includes(phenomena.slug),
  }));

  const short = res.filter(({ long }) => !long);
  const long = res.filter(({ long }) => long);

  if (long.length >= 1) {
    short.splice(4, 0, long[0]);
  }
  if (long.length >= 2) {
    short.splice(Math.floor(short.length / 8) * 4 + 1, 0, long[1]);
  }
  if (long.length >= 3) {
    short.push(long[2]);
  }

  return short;
}
