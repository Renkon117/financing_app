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
      <LeftCard />
      <RightCard />
      <Summary />
    </div>
  );
}

export default App;
