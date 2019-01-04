import { Link } from "gatsby";
import React from "react";

import { computeNearYears } from "src/utils/computeNearYears";
import { getVolumeByYear } from "src/utils/getVolumeByYear";

interface IProps {
  year: number;
}

export const CurrentYearBlock: React.SFC<IProps> = ({ year }) => {
  const { nextYear, prevYear } = computeNearYears(year);
  const volume = getVolumeByYear(year);

  return (
    <div className="sidebar__year">
      <img
        className="sidebar__volume-cover"
        src=""
        alt={`Обложка тома ${volume}.`}
      />
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
        <div className="sidebar__volume-link">
          Из тома <Link to={`/volumes/${volume}`}>{volume}</Link>
        </div>
      </div>
    </div>
  );
};
