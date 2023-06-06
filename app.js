import React from "react";
import Greeting from "./Greeting";

const App = () => {
  return (
    <div>
      <Greeting name="Avantha" greeting="good morning" />
      <Greeting name="Samara" greeting="good afternoon" />
      <Greeting name="Houston" greeting="good evening" />
    </div>
  );
};

export default App;
