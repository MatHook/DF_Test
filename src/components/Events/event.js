import React from "react";
import { Col, Row } from "reactstrap";

const Event = ({ title, place, date, image }) => (
  <Col className="Event">
    <Row>
      <img
        src={image}
        alt="eventImage"
        width="350px"
        height="240px"
        style={{ background: "#FFFFFF", marginBottom: "20px" }}
      />
    </Row>
    <Row className="EventItemDate">{date}</Row>
    <Row className="EventItemTitle">{title}</Row>
    <Row className="EventItemPlace">{place}</Row>
  </Col>
);

export default Event;
