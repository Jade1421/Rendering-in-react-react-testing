import React from "react";

const Greeting = ({ name, greeting }) => {
  return (
    <div data-testid="greeting-component">
      Hello and {greeting}, {name}!
    </div>
  );
};

export default Greeting;
