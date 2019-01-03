import { Location } from "@reach/router";
import { Link } from "gatsby";
import React from "react";

const links = [
  {
    path: "/years",
    title: "Феномены по годам",
  },
  {
    path: "/movies",
    title: "Фильмы Парфенова",
  },
  {
    path: "/ri",
    title: "Российская империя",
  },
  {
    important: true,
    path: "/volumes/1931-1940",
    title: "Том «1931-1940»",
  },
];

const Header = () => (
  <>
    <header className="main-header">
      <div className="wrapper">
        <Location>
          {({ location }) => {
            if (location.pathname === "/") {
              return (
                <div className="main-header__title-block">
                  <h1 className="main-header__title">Намедни. Наша Эра</h1>
                  <div className="main-header__tagline">Леонид Парфенов</div>
                </div>
              );
            }
            return (
              <Link className="main-header__title-block" to="/">
                <h1 className="main-header__title">Намедни. Наша Эра</h1>
                <div className="main-header__tagline">Леонид Парфенов</div>
              </Link>
            );
          }}
        </Location>
      </div>
    </header>
    <nav className="main-menu">
      <div className="wrapper">
        <ul className="main-menu__list">
          {links.map(({ title, path, important }) => (
            <li className="main-menu__item" key={path}>
              <Link
                className={`main-menu__link${
                  important ? " main-menu__link--important" : ""
                }`}
                to={path}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </>
);

export default Header;
