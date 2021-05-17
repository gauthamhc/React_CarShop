import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./Styles/Style.css";
import Header from "./Components/Header";
import Section from "./Components/Section";
import { GlobalProvider } from "./Components/Context";

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    </GlobalProvider>
  );
};

export default App;
