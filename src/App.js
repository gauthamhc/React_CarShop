import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./Styles/Style.css";
import Header from "./Components/Header";
import Section from "./Components/Section";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Section />
      </Router>
    </div>
  );
};

export default App;
