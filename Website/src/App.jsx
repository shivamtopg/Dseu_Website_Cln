import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import About from "./components/About";
import AboutGrid from "./components/AboutGrid";
import NewsSection from "./components/NewsSection";
import TabSection from "./components/TabSection";
import Facilities from "./components/Facilities";
import Entrepreneurship from "./components/Entrepreneurship";

function App() {
  return (
    <>
      {/* <Card />
      <About />
      <div className="app">
        <NewsSection />
        <TabSection />
      </div> */}
      {/* <Facilities /> */}
      <Entrepreneurship />


    </>
  );
}

export default App;
