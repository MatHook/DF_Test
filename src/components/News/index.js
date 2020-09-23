import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../sass/News.sass";
import NewsItem from "../NewsItem";

const dates = ["4 января 2020 г.", "2 января 2020 г.", "2 января 2020 г."];
const title = [
  "Как объединилась реальность и виртуальность – LIKEE PARTY",
  "Как объединилась реальность и виртуальность – LIKEE PARTY",
  "Как объединилась реальность и виртуальность – LIKEE PARTY",
];
const news = [0, 1, 2];

const images = ["./newsPic1.jpeg", "./newsPic2.jpeg", "./newsPic3.jpeg"];

const News = () => (
  <div className="News">
    <div className="NewsOuterBlock">
      <Col className="PicturesBlock">
        <Container className="Picture">
          <img src="menuPic1.jpeg" alt="menuPic" width="445" height="215" />
        </Container>
        <Container className="Picture">
          <img src="menuPic2.jpeg" alt="menuPic" width="445" height="215" />
        </Container>
      </Col>
      <Col className="NewsBlock">
        <Row className="TitleBlock">
          <Col className="NewsTitle">Новости</Col>
          <Col className="AllNews">
            Все новости
            <img src="arrow.svg" alt="" className="Arrow" />
          </Col>
        </Row>
        <Row>
          {news.map((n, i) => (
            <NewsItem
              title={title[i]}
              date={dates[i]}
              image={images[i]}
              key={i || n}
              className="NewsItem"
            />
          ))}
        </Row>
      </Col>
    </div>
  </div>
);

export default News;
