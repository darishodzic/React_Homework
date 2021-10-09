import React from "react";
import "./CardList.css";

const CardList = ({ data }) => {
  return data.map((el, index) => (
    <div className="card" key={index}>
      {el.fact}
    </div>
  ));
};
export default CardList;
