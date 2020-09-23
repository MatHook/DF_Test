import React from "react";
import "../../sass/Footer.sass";
import "../../sass/FooterLink.sass";
import FooterLink from "../FooterLink";
import {
  Col,
  Row,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
} from "reactstrap";

const titles = [
  "О компании",
  "Организаторам",
  "Экспонентам",
  "Посетителям",
  "Прессе",
];
const titleItems = ["First", "Second", "Third", "Fourth"];

const Footer = () => (
  <div className="Footer">
    <div className="FooterBlock">
      <Col>
        <FooterLink
          id={1}
          title={titles[0]}
          items={titleItems}
          className="FooterItem"
        />
        <FooterLink
          id={2}
          title={titles[1]}
          items={titleItems}
          className="FooterItem"
        />
      </Col>
      <Col>
        <FooterLink
          id={3}
          title={titles[2]}
          items={titleItems}
          className="FooterItem"
        />
        <FooterLink
          id={4}
          title={titles[3]}
          items={titleItems}
          className="FooterItem"
        />
      </Col>
      <Col>
        <FooterLink
          id={5}
          title={titles[4]}
          items={titleItems.slice(0, 3)}
          className="FooterItem"
        />
        <div className="FooterItem">
          <Row className="Title">Приложение</Row>
          <Row className="Icon">
            <img src="/iconGoogle.svg" alt="iconGoogle" />
          </Row>
          <Row className="Icon">
            <img src="/iconAppStore.svg" alt="iconAppStore" />
          </Row>
        </div>
      </Col>
      <Col>
        <div className="FooterItem">
          <Row className="TitleSI">Мы в соц. сетях</Row>
          <Row className="IconsRow">
            <img src="iconYT.svg" alt="iconYT" className="SocialIcon" />
            <img src="iconVK.svg" alt="iconVK" className="SocialIcon" />
            <img src="iconFB.svg" alt="iconFB" className="SocialIcon" />
            <img src="iconIG.svg" alt="iconIG" className="SocialIcon" />
          </Row>
        </div>
        <div className="FooterItem">
          <Row className="Title">Подписка на новости</Row>
          <Row>
            <p>
              Получайте все самые последние новости о мероприятиях в
              Экспофоруме.
            </p>
          </Row>
          <Row>
            <InputGroup>
              <Input placeholder="Введите ваш e-mail" className="Input" />
              <InputGroupAddon addonType="append">
                <Button className="Button">
                  <img src="btnBg.svg" alt="btnBg" />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Row>
        </div>
      </Col>
    </div>
  </div>
);

export default Footer;
