import React from "react";
import "../../sass/NewsItem.sass";

const NewsItem = ({ image, date, title }) => (
  <div className="NewsItem">
    <img src={image} alt="icnsrc" className="Image" />
    <div className="TextBlock">
      <p className="Date">{date}</p>
      <p>{title}</p>
    </div>
  </div>
);

export default NewsItem;
