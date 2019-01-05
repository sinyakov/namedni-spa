import { Link } from "gatsby";
import _ from "lodash";
import React from "react";

import Layout from "src/components/Layout/Layout";
import SEO from "src/components/seo";

import { volumes } from "src/constants/volumes";

const VolumesList = () => {
  return (
    <Layout>
      <SEO title="Феномены по годам" />
      <h1 className="page-title page-title--center">
        Тома «Намедни. Наша эра»
      </h1>

      <ul className="volume-list">
        {Object.keys(volumes).map(volume => (
          <li className="volume-item volume-item--main">
            <Link className="volume-item__wrapper" to={`/volumes/${volume}/`}>
              <img
                src={`/img/volumes/covers/${volume}.jpg`}
                alt={`Намедни ${volume}`}
                title={`Том «Намедни ${volume}»`}
              />
            </Link>
          </li>
        ))}
      </ul>

      <p>
        Планируемые тома: <Link to="/volumes/1921-1930">Том 9. 1921-1930</Link>{" "}
        и <Link to="/volumes/2011-2015">Том 10. 2011-2015</Link>.
      </p>
    </Layout>
  );
};

export default VolumesList;
