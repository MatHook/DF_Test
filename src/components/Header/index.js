import React from "react";
import "../../sass/Header.sass";
import BlockItem from "../BlockItem";
import HeaderTop from "../HeaderTop";

const items = [
  "Календарь мероприятий",
  "Как добраться до Экспофорума",
  "Онлайн-заявка на организацию мероприятия",
  "План и инфраструктура комплекса",
];
const colors = ["#2378FC", "#30BCC9", "#FFC41E", "#F6404F"];

const Header = () => (
  <div className="Header">
    <div className="Content">
      <HeaderTop className="TopLine" />
      <div className="HeaderMain">
        <div className="HeaderTitleBlock">
          <p className="HeaderTitle">Экспофорум</p>
          <p className="TitleText">
            конгрессно-выставочный центр Санкт-Петербурга
          </p>
          <div className="MoreInformation">
            <p className="MoreInformationText">О компании</p>
            <img src="./arrowW.svg" alt="arrow" className="HeaderArrow" />
          </div>
        </div>
        <div>
          <div className="BlockWrap">
            <div className="BlockColumn">
              {items.slice(0, 2).map((block, i) => (
                <BlockItem
                  color={colors[i]}
                  text={block}
                  key={i}
                  className="Block"
                />
              ))}
            </div>
            <div className="BlockColumn">
              {items.slice(2, 4).map((block, i) => (
                <BlockItem
                  color={colors[i + 2]}
                  text={block}
                  key={i}
                  className="Block"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
