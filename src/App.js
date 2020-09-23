import React from "react";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";
import SideMenu from "./components/SideMenu";
import "./sass/App.sass";
import { Col } from "reactstrap";

const App = () => {
  return (
    <div>
      <Col className="App">
        <Header className="Header"/>
        <SideMenu />
        <Events />
        <News />
        <Footer />
      </Col>
    </div>
  );
};

export default App;
