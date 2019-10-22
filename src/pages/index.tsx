import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

// https://github.com/gatsbyjs/gatsby/issues/2289
// separate css file

import { parfenon, namedni } from '../../parfenon.js';
const lastParfenon = parfenon[parfenon.length - 1];
const lastNamedni = namedni[namedni.length - 1];

const IndexPage = () => (
  <Layout>
    <SEO title="Намедни. Наша Эра | Леонид Парфенов" />
    <div className="home-blocks">
      <div className="home-blocks__column">
        <a
          href={`/namedni/${lastNamedni.year}`}
          className="home-section home-section--namednivideo"
        >
          <h2 className="home-section__title">
            «Намедни 1946-1960»
            <br />
            на ютуб-канале
          </h2>
          <img src="/img/home/namednivideo.png" />
        </a>
      </div>
      <div className="home-blocks__column">
        <section className="home-section home-section--book">
          <img
            src="/img/home/bookbox.jpg"
            alt=" Разворот книги «Намедни. Наша Эра»"
          />
          <h2 className="home-section__title">
            Книжная серия
            <br />
            «Намедни. Наша Эра»
          </h2>
          {/* <div> */}
          <p>
            «Намедни. Наша эра» — проект журналиста Леонида Парфенова. В формате
            события-люди-явления собраны феномены советской и постсоветской
            жизни. Каждый год — от 30 до 40 феноменов.
          </p>
          <p>
            На данный момент выпущено 8 томов с 1931 по 2010 год. Планируется
            выход <a href="/volumes/1921-1930">тома «1921-1930»</a> (в 2019
            году) и <a href="/volumes/2011-2015">тома «2011-2020»</a> (в 2021
            году).
          </p>
          {/* <p>
              Книги представляют собой двухкилогаммовые альбомы с большими
              фотографиями. На сайте доступны тексты для желающих ознакомиться с
              мнением Леонида Парфенова.
            </p> */}
          {/* </div> */}
        </section>
      </div>
    </div>
    <div className="home-blocks">
      <div className="home-blocks__column">
        <section className="home-section">
          <div className="home-movie__inner">
            <Link to="/russkie-evrei-2.html" className="home-section__link">
              <h2 className="home-section__title">
                Дилогия «Русские&nbsp;грузины»
              </h2>
            </Link>
            <p>
              Премьера фильма{' '}
              <a href="/russkie-evrei-2.html">«Русские евреи»</a> состоялась
              весной 2018 года на&nbsp;ютуб-канале «Парфенон». Фильм описывает
              роль евреев в истории России и разделен на три части: до
              революции, 1918-1948 и после 1949 года.
            </p>
            <p>
              В планах фильмы про «русских грузин» и «русских немцев» (по две
              серии каждый). Дилогия «Русские&nbsp;грузины» выйдет в начале 2021
              года.
            </p>
          </div>
        </section>
        <section className="home-section">
          <Link to="/movies" className="home-section__link">
            <h2 className="home-section__title">Последние фильмы</h2>
          </Link>
          <ul className="movies-list">
            <li>
              Русские евреи <span className="movies-list__year">2018</span>
            </li>
            <li>
              Цвет нации <span className="movies-list__year">2014</span>
            </li>
            <li>
              Глаз Божий <span className="movies-list__year">2012</span>
            </li>
            <li>
              Он пришёл дать нам волю{' '}
              <span className="movies-list__year">2011</span>
            </li>
            <li>
              Зворыкин-Муромец <span className="movies-list__year">2010</span>
            </li>
            <li>
              Хребет России <span className="movies-list__year">2009</span>
            </li>
            <li>
              Птица-Гоголь <span className="movies-list__year">2008</span>
            </li>
            <li>
              И лично Леонид Ильич{' '}
              <span className="movies-list__year">2007</span>
            </li>
            <li>
              Война в Крыму — все в дыму{' '}
              <span className="movies-list__year">2004</span>
            </li>
          </ul>
        </section>
        <section className="home-section">
          <Link to="/ri" className="home-section__link">
            <h2 className="home-section__title">Цикл «Российская империя»</h2>
          </Link>
          <p>
            16-серийный проект Леонида Парфенова об истории российского
            государства с 1697 по 1917 год, выпущенный к 300-летию основания
            Российской империи.
          </p>
          <p>
            Через десять лет вышла серия книг «Российская империя», повторяющая
            телеверсию. На данный момент выпущено 3 тома из 5. Последний том
            «Александр I. Николай I» вышел в 2014 году.
          </p>
        </section>
      </div>
      <div className="home-blocks__column">
        <section className="home-section home-section--parfenon">
          <div className="home-section__inner">
            <h2 className="home-section__title">Видеоблог «Парфенон»</h2>
            <p className="home-section--parfenon__description">
              «Парфенон» — про то, что со мной было на неделе, что видел, про
              что думал, что почему-то вспомнилось. Разговоры под вино недели,
              выбранное в соответствии с обстоятельствами — потому «18».
            </p>
            <Link
              className="parfenon-preview"
              to={`/parfenon/${lastParfenon.youtube}`}
            >
              <picture>
                <source
                  srcSet={`https://i.ytimg.com/vi_webp/${
                    lastParfenon.youtube
                  }/maxresdefault.webp`}
                  type="image/webp"
                />
                <img
                  className="video__media"
                  src={`https://i.ytimg.com/vi/${
                    lastParfenon.youtube
                  }/maxresdefault.jpg`}
                  alt="Последняя серия"
                />
              </picture>
              <p>{lastParfenon.title}</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
    <section className="home-section home-section--karaoke">
      <h2 className="home-section__title home-section__title--karaoke">
        Шоу «Намедни в караоке»
      </h2>

      <p>
        Летом 2017 года выходила передача «Намедни в караоке» на телеканале
        RTVi. Там же собирались снимать продолжение серий «Намедни» — 1946-1960,
        но от планов отказались.
      </p>

      <p>
        <strong>Официальное описание:</strong> Легенда российского телевидения
        Леонид Парфенов возвращается на экраны с новым проектом «Намедни в
        караоке». Один год — одна песня и интересный гость в студии.
        Исторические события, личные воспоминания, и конечно любимые хиты.
      </p>

      <p>В выпусках приняли участие:</p>

      <ul className="karaoke-guests">
        <li>Юрий Стоянов</li>
        <li>Леонид Ярмольник</li>
        <li>Максим Виторган</li>
        <li>Владислав Третьяк</li>
        <li>Алексей Кортнев</li>
        <li>Андрей Макаревич</li>
        <li>Михаил Боярский</li>
        <li>Дмитрий Певцов</li>
        <li>Максим Аверин</li>
        <li>Ефим Шифрин</li>
      </ul>
    </section>
  </Layout>
);

export default IndexPage;
