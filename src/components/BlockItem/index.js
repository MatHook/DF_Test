import React from "react";
import '../../sass/BlockItem.sass'

const BlockItem = ({ text, color, className }) => (
  <div className={className} style={{ backgroundColor: color }}>
    <div className="BlockItemContent">
      <p className="ContentText">{text}</p>
      <div className="MoreTextBlock">
        <p className="MoreText">Подробнее</p>
        <img src="./arrowW.svg" alt="arrow" className="HeaderArrow" />
      </div>
    </div>
  </div>
);

export default BlockItem;
