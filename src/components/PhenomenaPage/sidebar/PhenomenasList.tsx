import { Link } from "gatsby";
import React from "react";

import { declinePhenomena } from "src/utils/declineNoun";

interface IProps {
  year: number;
  phenomenas: any[];
}

export const PhenomenasList: React.SFC<IProps> = ({ phenomenas, year }) => (
  <div className="sidebar__phenomena">
    <h2 className="sidebar__header">
      Еще {phenomenas.length} {declinePhenomena(phenomenas.length)}{" "}
      {year} года
    </h2>
    <div className="sidebar__phenomena-list">
      {phenomenas.map(phenomena => (
        <Link className="phenomena-list__year-item" to={`/${phenomena.slug}.html`}>{phenomena.title}</Link>
      ))}
    </div>
  </div>
);
