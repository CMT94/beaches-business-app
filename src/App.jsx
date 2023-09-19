import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Destinations />
    </React.Fragment>
  );
};

export default App;
