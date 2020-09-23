import React from "react";
import "../../sass/HeaderTop.sass";

const HeaderTop = ({ className }) => (
  <div className={className}>
    <img src="/logo.png" alt="logo" />
    <div className="MainMenu">
      <p className="MainMenuItem">О комплексе</p>
      <p className="MainMenuItem">О компании</p>
      <p className="MainMenuItem">Новости</p>
      <p className="MainMenuItem">Медиа-банк</p>
      <p className="MainMenuItem">Контакты</p>
    </div>
    <div className="RightBar">
      <img src="/search.svg" alt="search" className="SearchIcon" />
      <img src="/globe.svg" alt='globe' />
      <p className="TextBar">English</p>
    </div>
  </div>
);

export default HeaderTop;
