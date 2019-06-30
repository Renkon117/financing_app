import React from "react";
import "./CardsModule.css";

function LeftCard() {
  return (
    <div className="leftCard">
      <h1>Outcome Page</h1>
      <ul className="column-3">
        <li>date</li>
        <li>category</li>
        <li>value</li>
      </ul>
      <div className="container">
        <input type="text" placeholder=" / " id="date" />
        <input type="text" placeholder="category" id="category" />
        ￥<input type="text" placeholder="value" id="value" />
      </div>
      <button id="add">+</button>
    </div>
  );
}

export default LeftCard;
