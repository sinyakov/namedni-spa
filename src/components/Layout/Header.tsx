import { Location } from '@reach/router';
import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

const links = [
  {
    path: '/years',
    title: 'Феномены по годам',
  },
  {
    path: '/movies',
    title: 'Фильмы Парфенова',
  },
  {
    path: '/ri',
    title: 'Российская империя',
  },
  {
    important: true,
    path: '/volumes/1931-1940',
    title: 'Том «1931-1940»',
  },
];

const Header = () => (
  <div className="mainHeader">
    <header className="mainHeader__top">
      <Location>
        {({ location }) => {
          if (location.pathname === '/') {
            return (
              <div className="mainHeader__titleBlock">
                <h1 className="mainHeader__title">Намедни. Наша Эра</h1>
                <div className="mainHeader__tagline">Леонид Парфенов</div>
              </div>
            );
          }
          return (
            <Link className="mainHeader__titleBlock" to="/">
              <h1 className="mainHeader__title">Намедни. Наша Эра</h1>
              <div className="mainHeader__tagline">Леонид Парфенов</div>
            </Link>
          );
        }}
      </Location>
      {/* <button className="darkthemeSwitcher darkthemeSwitcher_sun" /> */}
    </header>
    <ul className="mainHeader__bottom">
      {links.map(({ title, path, important }) => (
        <li className="mainHeader__item" key={path}>
          <Location>
            {({ location }) => {
              if (location.pathname.replace(/\/+$/, '') === path) {
                return (
                  <span
                    className={cx(
                      'mainHeader__link',
                      'mainHeader__link_selected',
                      important && ' mainHeader__link_important'
                    )}
                  >
                    {title}
                  </span>
                );
              }
              return (
                <Link
                  className={cx(
                    'mainHeader__link',
                    important && ' mainHeader__link_important'
                  )}
                  to={path}
                >
                  {title}
                </Link>
              );
            }}
          </Location>
        </li>
      ))}
    </ul>
  </div>
);

export default Header;
