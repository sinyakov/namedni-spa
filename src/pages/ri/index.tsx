import { Link } from "gatsby";
import React from "react";

import Layout from "src/components/Layout/Layout";
import SEO from "src/components/seo";
import { IRuler, rulers } from "src/constants/ri";

import "./index.css";

const RiMainPage: React.SFC = () => {
  return (
    <Layout>
      <SEO title="Российская империя" />
      <div className="main__grid">
        <div className="main__block">
          <img
            className="main__img"
            style={{ width: 240, height: 320 }}
            src="https://upload.wikimedia.org/wikipedia/commons/7/72/Peter_der-Grosse_1838.jpg"
          />
          <div className="main__column">
            <h2 className="main__header">Петр I</h2>
            <ul className="main__list" style={{ width: 410 }}>
              <li>
                <a href="/ri/petr-i/1.html">1. Юность Петра</a>
              </li>
              <li>
                <a href="/ri/petr-i/2.html">2. За границу!</a>
              </li>
              <li>
                <a href="/ri/petr-i/3.html">3. Начало Северной войны</a>
              </li>
              <li>
                <a href="/ri/petr-i/4.html">4. Петра прекрасное творенье</a>
              </li>
              <li>
                <a href="/ri/petr-i/5.html">5. Шведы под Полтавой</a>
              </li>
              <li>
                <a href="/ri/petr-i/6.html">
                  6. Заводы, промышленность, торговля
                </a>
              </li>
              <li>
                <a href="/ri/petr-i/7.html">7. Императрица-иностранка</a>
              </li>
              <li>
                <a href="/ri/petr-i/8.html">8. Царевич Алексей Петрович</a>
              </li>
              <li>
                <a href="/ri/petr-i/9.html">
                  9. Новая жизнь, новый календарь, новый шрифт
                </a>
              </li>
              <li>
                <a href="/ri/petr-i/10.html">
                  10. Последний бросок на юг и новый север
                </a>
              </li>
              <li>
                <a href="/ri/petr-i/11.html">11. Веселье</a>
              </li>
              <li>
                <a href="/ri/petr-i/12.html">12. Эпилог, ставший прологом</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RiMainPage;
