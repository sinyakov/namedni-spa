import { Link } from 'gatsby';
import React from 'react';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/seo';
import { IRuler, rulers } from 'src/constants/ri';

import './index.css';

const governorList = [
  {
    name: 'Петр I',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Peter_der-Grosse_1838.jpg',
    sections: [
      'Юность Петра',
      'За границу!',
      'Начало Северной войны',
      'Петра прекрасное творенье',
      'Шведы под Полтавой',
    ],
    episodes: [1, 2],
  },
  {
    name: 'Без Петра',
    img: 'http://www.vidania.ru/picture/raznoe/anna_ioannovna_fragment.jpg',
    sections: [
      'Юность Петра',
      'За границу!',
      'Начало Северной войны',
      'Петра прекрасное творенье',
      'Шведы под Полтавой',
    ],
    episodes: [3],
  },
  {
    name: 'Екатерина II',
    img:
      'https://www.lesjeunesrussisants.fr/peinture/images/antropov/antropov/original__ii_jpg.jpeg',
    sections: [
      'Юность Петра',
      'За границу!',
      'Начало Северной войны',
      'Петра прекрасное творенье',
      'Шведы под Полтавой',
    ],
    episodes: [4, 5],
  },
  {
    name: 'Павел I',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD_%D0%A1._%D0%A9%D1%83%D0%BA%D0%B8%D0%BD_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%9F%D0%B0%D0%B2%D0%BB%D0%B0_I_%281799%29.jpg/1200px-%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD_%D0%A1._%D0%A9%D1%83%D0%BA%D0%B8%D0%BD_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%9F%D0%B0%D0%B2%D0%BB%D0%B0_I_%281799%29.jpg',
    sections: [
      'Юность Петра',
      'За границу!',
      'Начало Северной войны',
      'Петра прекрасное творенье',
      'Шведы под Полтавой',
    ],
    episodes: [6],
  },
  {
    name: 'Александр I',
    img:
      'https://histrf.ru/uploads/media/event/0001/05/thumb_4812_event_big.jpeg',
    sections: [
      'Юность Петра',
      'За границу!',
      'Начало Северной войны',
      'Петра прекрасное творенье',
      'Шведы под Полтавой',
    ],
    episodes: [7, 8],
  },
  {
    name: 'Николай I',
    img:
      'https://cdn-s-static.arzamas.academy/uploads/ckeditor/pictures/8904/content_08.jpg',
    sections: [
      'Юность Петра',
      'За границу!',
      'Начало Северной войны',
      'Петра прекрасное творенье',
      'Шведы под Полтавой',
    ],
    episodes: [9, 10],
  },
  {
    name: 'Александр II',
    img:
      'https://ruxpert.ru/images/thumb/0/0c/Aleksandr2.jpg/260px-Aleksandr2.jpg',
    sections: [
      'Юность Петра',
      'За границу!',
      'Начало Северной войны',
      'Петра прекрасное творенье',
      'Шведы под Полтавой',
    ],
    episodes: [11, 12],
  },
  {
    name: 'Александр III',
    img:
      'https://histrf.ru/uploads/media/person/0001/01/thumb_166_person_full.jpeg',
    sections: [
      'Юность Петра',
      'За границу!',
      'Начало Северной войны',
      'Петра прекрасное творенье',
      'Шведы под Полтавой',
    ],
    episodes: [13],
  },
  {
    name: 'Николай II',
    img:
      'http://aminpro.ru/dopoln/kartinki/dopol/ludi/nikolay_2/nikolay_2-hud_cherny.jpg',
    sections: [
      'Юность Петра',
      'За границу!',
      'Начало Северной войны',
      'Петра прекрасное творенье',
      'Шведы под Полтавой',
    ],
    episodes: [14, 15, 16],
  },
];

const GovernorBlock = ({ name, img, sections, episodes }) => (
  <div className="main__block">
    <img className="main__img" src={img} />
    <div className="main__column">
      <h2 className="main__header">{name}</h2>
      <ul className="main__list" style={{ width: 410 }}>
        {sections.map((title, index) => (
          <li>
            <Link to={`/ri/petr-i/${index + 1}.html`}>
              {index + 1}. {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="riEpisodeList">
      {episodes.map((num) => (
        <Link to={`/ri/${num}/`} className="riEpisode">
          {num} серия
        </Link>
      ))}
    </div>
  </div>
);

const RiMainPage: React.SFC = () => {
  return (
    <Layout>
      <SEO title="Российская империя" />
      <h1 className="page-title page-title--center">Российская империя</h1>
      <div className="main__grid">
        {governorList.map(props => (
          <GovernorBlock {...props} />
        ))}
      </div>
    </Layout>
  );
};

export default RiMainPage;
