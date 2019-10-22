import { Link } from 'gatsby';
import React from 'react';
import { namedni } from '../../../../parfenon.js';
import { computeNearYears } from 'src/utils/computeNearYears';
import { getVolumeByYear } from 'src/utils/getVolumeByYear';

interface IProps {
  year: number;
  data: any;
}

export const CurrentYearBlock: React.SFC<IProps> = ({ year }) => {
  const { nextYear, prevYear } = computeNearYears(year);
  const volume = getVolumeByYear(year);

  return (
    <div className="sidebar__year">
      <Link className="sidebar__volume" to={`/volumes/${volume}`} data-volume={volume}>
        <img
          className="sidebar__volume-cover"
          src={`/img/volumes/covers/${volume}.jpg`}
          alt={`Обложка тома ${volume}.`}
        />
      </Link>
      <div className="sidebar__year-inner">
        <div className="year-title">
          {prevYear && (
            <div className="year-title__nearby-year year-title__nearby-year--prev sidebar__nearby-year sidebar__nearby-year--prev">
              <a className="year-title__link" href={`/years/${prevYear}`}>
                ←&nbsp;
                <span className="year-title__underline">{prevYear}</span>
              </a>
            </div>
          )}
          <div className="year-title__curr-year sidebar__curr-year">
            <a href={`/years/${year}`}>{year}</a>
          </div>
          {nextYear && (
            <div className="year-title__nearby-year year-title__nearby-year--next sidebar__nearby-year sidebar__nearby-year--next">
              <a className="year-title__link" href={`/years/${nextYear}`}>
                <span className="year-title__underline">{nextYear}</span>
                &nbsp;→
              </a>
            </div>
          )}
        </div>
        {namedni.find(n => n.year === year) && (
          <div className="sidebar__volume-link">
            <Link to={`/namedni/${year}`}>Смотреть видео</Link>
          </div>
        )}
      </div>
    </div>
  );
};
