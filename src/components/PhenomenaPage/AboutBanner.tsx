import React from "react";

export const AboutBanner = () => (
  <div className="banner">
    <div className="banner__inner">
      <h2 className="banner__header">Журналист Леонид&nbsp;Парфенов</h2>
      <p>
        Автор телепроектов «Намедни» и <a href="/ri/">«Российская империя»</a>.
        Пятикратный лауреат ТЭФИ.
      </p>
      <p>
        В настоящее время выпускает{" "}
        <a href="/volumes/">тома «Намедни. Наша эра»</a>, описывающие
        исторические явления по десятилетиям, и снимает документальные фильмы (
        <a href="/zvorykin.html">«Зворыкин-Муромец»</a>,{" "}
        <a href="/glaz-bozhij.html">«Глаз божий»</a>,{" "}
        <a href="/tsvet-natsii.html">«Цвет нации»</a>,{" "}
        <a href="/russkie-evrei-2.html">«Русские евреи»</a>).
      </p>
    </div>
  </div>
);
