import React from "react";
import "./App.css";

function LeftCard() {
  return (
    <div className="leftCard">
      <h1>Left card Page</h1>
      <ul className="column-3">
        <li>date</li>
        <li>category</li>
        <li>value</li>
      </ul>
      <input type="text" placeholder=" / " id="date" />
      <input type="text" placeholder="category" id="category" />
      <input type="text" placeholder="value" id="value" />
      <button id="add">+</button>
    </div>
  );
}

export default LeftCard;
