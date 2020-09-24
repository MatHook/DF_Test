import React from "react";
import { Row, Col, Container } from "reactstrap";
import "../../sass/Events.sass";
import Event from "./event";

const images = [
  "./event1.jpeg",
  "./event2.png",
  "./event3.png",
  "./event4.jpeg",
  "./event5.jpeg",
  "./event6.png",
];
const dates = [
  "2 января 2020 г. – 7 января 2020 г.",
  "2 января 2020 г. – 7 января 2020 г.",
  "2 января 2020 г. – 7 января 2020 г.",
  "2 января 2020 г. – 7 января 2020 г.",
  "2 января 2020 г. – 7 января 2020 г.",
  "2 января 2020 г. – 7 января 2020 г.",
];
const eventsName = [
  "ЭКСПО ЕЛКА",
  "ЭКСПО ЕЛКА",
  "ЭКСПО ЕЛКА",
  "ЭКСПО ЕЛКА",
  "ЭКСПО ЕЛКА",
  "ЭКСПО ЕЛКА",
];
const eventPlace = [
  "Парк интерактивных развлечений",
  "Парк интерактивных развлечений",
  "Парк интерактивных развлечений",
  "Парк интерактивных развлечений",
  "Парк интерактивных развлечений",
  "Парк интерактивных развлечений",
];

const Events = () => (
  <div className="Events">
    <div className="EventsBlock">
      <Container>
        <Row>
          <Col className="NewsTitle">Текущие и будущие мероприятия</Col>
          <Col className="AllNews">
            Все мероприятия
            <img src="arrow.svg" alt="" className="Arrow" />
          </Col>
        </Row>
        <Row className="EventsList">
          {images.splice(0, 3).map((item, index) => (
            <Event
              image={item}
              title={eventsName[index]}
              date={dates[index]}
              place={eventPlace[index]}
            />
          ))}
        </Row>
        <Row className="EventsList">
          {images.splice(0, 3).map((item, index) => (
            <Event
              image={item}
              title={eventsName[index]}
              date={dates[index]}
              place={eventPlace[index]}
            />
          ))}
        </Row>
      </Container>
    </div>
  </div>
);

export default Events;
