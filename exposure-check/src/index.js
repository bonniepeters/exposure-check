import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from "./Components/Quiz"
import './index.css';

function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);