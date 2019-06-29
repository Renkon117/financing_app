import React from "react";
import "./App.css";
import Nav from "./Nav";
import Summary from "./Summary";

import RightCard from "./RightCard";
import LeftCard from "./LeftCard";

function App() {
  return (
    <div className="App">
      <Nav />
      <ul>
        <li>
          <RightCard />
        </li>
        <li>
          <LeftCard />
        </li>
      </ul>
      <Summary />
    </div>
  );
}

export default App;
