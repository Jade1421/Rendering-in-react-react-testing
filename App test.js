import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../src/App";
import Greeting from "../src/Greeting";

describe("Test App.js", () => {
test("renders without crashing", () => {
render(<App />); // Render the App component

});

test("displays three greetings", () => {
render(<App />); // Render the App component

// Assert that three instances of the Greeting component are rendered
const greetings = screen.getAllByText(/Hello|Hi|Hey/i);
expect(greetings).toHaveLength(3);
});
});
