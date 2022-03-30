import React from "react";
import "./App.css";
import CardComponent1 from "./components/CardComponent1";
import CardComponent2 from "./components/CardComponent2";
import CardComponent3 from "./components/CardComponent3";
import { cardData } from "./data";

function App() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3">
          <CardComponent1 />
          <CardComponent2 workExperience={cardData[0]} />
          <CardComponent2 workExperience={cardData[1]} />
          <CardComponent2 workExperience={cardData[2]} />
        </div>
        <div className="w-full md:w-2/3">
          <CardComponent3 />
        </div>
      </div>
    </>
  );
}

export default App;
