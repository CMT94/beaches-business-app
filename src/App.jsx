import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Selects from "./components/Selects";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
    </React.Fragment>
  );
};

export default App;
