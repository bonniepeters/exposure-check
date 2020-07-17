import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Questionnaire from "./Components/Questionnaire";
import Questionnaire2 from "./Components/Questionnaire";


function App() {
  return (
    <div className="App">
      <Questionnaire />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);