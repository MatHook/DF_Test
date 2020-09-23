import React from "react";
import { Row } from "reactstrap";

import "../../sass/FooterLink.sass";

const FooterLink = ({ title, items, className }) => (
  <div className={className}>
    <Row className="Title">{title}</Row>
    {items.map((item, i) => (
      <Row key={i} className="Item">
        {item}
      </Row>
    ))}
  </div>
);

export default FooterLink;
