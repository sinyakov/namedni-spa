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
      Еще {phenomenas.length - 1} {declinePhenomena(phenomenas.length - 1)}{" "}
      {year} года
    </h2>
    <ul className="sidebar__phenomena-list">
      {phenomenas.map(phenomena => (
        <li className="phenomena-list__year-item" key={phenomena.slug}>
          <Link to={`/${phenomena.slug}.html`}>{phenomena.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
