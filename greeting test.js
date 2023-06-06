import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../src/App";
import Greeting from "../src/Greeting";

describe("Test Greeting.js", () => {
  test("renders name and greeting props correctly", () => {
    render(<Greeting name="John" greeting="Hello" />); // Render the Greeting component with props

    // Assert that the name and greeting are rendered correctly
    expect(screen.getByText(/John/i)).toBeInTheDocument(); // Check if the name "John" is in the document
    expect(screen.getByText(/Hello/i)).toBeInTheDocument(); // Check if the greeting "Hello" is in the document
  });
});
