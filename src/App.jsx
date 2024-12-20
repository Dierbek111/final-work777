import "./App.css";
import React from "react";
import Hero from "./components/Hero/Hero";
import OurServicecards from "./components/OurServicecards/OurServicecards";
import OurServicetext from "./components/OurServicetext/OurServicetext";



const App = () => {
  return (
    <>
      <Hero />
      <OurServicecards />
      <OurServicetext />
    </>
  );
};

export default App;
