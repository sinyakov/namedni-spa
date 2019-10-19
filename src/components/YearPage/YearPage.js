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
import { namedni } from '../../../parfenon.js';
import { isYearHasImage } from '../../utils/isYearHasImage';

export default class extends React.Component {
  render() {
    const { pageContext } = this.props;
    const { year, yearPhenomenas } = pageContext;
    const { prevYear, nextYear } = computeNearYears(+year);
    const currentYearVideo = namedni.find(video => video.year === +year);

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
            const yearHasImage = isYearHasImage(year);

            const imgPath = `/img/phenomena/${year}/${slug}.jpg`;
            const classname = cx(
              'grid__phenomena',
              long && 'grid__phenomena_long',
              !yearHasImage && 'grid__phenomena_withoutImage'
            );
            const css = yearHasImage ? {
              backgroundImage: `linear-gradient(rgba(25,25,25,.75), rgba(25,0,0,.5)), url(${imgPath})`,
              ':hover': {
                backgroundImage: `linear-gradient(rgba(25,25,25,.9), rgba(25,0,0,.7)), url(${imgPath})`,
              },
            } : undefined;

            return (
              <Link
                className={classname}
                key={slug}
                to={`/${slug}.html`}
                css={css}
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
          {currentYearVideo ? <Link to={`/namedni/${year}`} className="year__footer-right">
            {(year >= 1946 && year <= 1960) ? (
              <picture>
                <source
                  srcSet={`https://i.ytimg.com/vi_webp/${
                    currentYearVideo.youtube
                    }/maxresdefault.webp`}
                  type="image/webp"
                />
                <img
                  className="video__media"
                  src={`https://i.ytimg.com/vi/${
                    currentYearVideo.youtube
                    }/maxresdefault.jpg`}
                  alt={currentYearVideo.year}
                />
              </picture>
            ) : (
                <div className="namedniFooter">
                  <h2 className="namedniFooter__title">Смотреть видеоверсию<br />Намедни-{year}</h2>
                </div>
              )}
          </Link> : (
              <div className="year__footer-right">
                <div className="namedniFooter namedniFooter_gray">
                  <h2 className="namedniFooter__title">Видеоверсия отсутствует</h2>
                </div>
              </div>
            )}
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
