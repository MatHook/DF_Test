import React from "react";
import "../../sass/SideMenu.sass";
import { Col, Row } from "reactstrap";

const titleObj = [
  {
    title: "Организаторам",
    items: ["Документы организаторам", "Услуги организаторам", "Выстовочные площади", "Рестораны и кафе", "Когресс-центр", "Спорт-центр"],
  },
  {
    title: "Экспонентам",
    items: ["Общие условия участия", "Услуги экспонентам", "Документы экспонентам", "Центр деловых контрактов", "Забранировать гостиницу"],
  },
  {
    title: "Посетителям",
    items: ["Сервисы", "Онлан регистрация на мероприятие", "Забранировать гостиницу", "Центр деловых контрактов"],
  },
  {
    title: "Прессе",
    items: ["Аккредитация", "Пресс-служба", "Правила аккредитации"],
  },
];

const SideMenu = () => (
  <div className="SideMenu">
    <div className="SideMenuBlock">
      {titleObj.map((titles, i) => (
        <Col key={i} className="SideMenuItem">
          <Row className="TitleText">{titles.title}</Row>
          {titles.items.map((item, id) => (
            <Row key={id} className="ItemText">{item}</Row>
          ))}
        </Col>
      ))}
    </div>
  </div>
);

export default SideMenu;
