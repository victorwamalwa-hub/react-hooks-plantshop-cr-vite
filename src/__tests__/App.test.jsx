import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../components/App";   // ← adjust to match `find src -name App.jsx`

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });
});