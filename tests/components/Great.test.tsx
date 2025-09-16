//import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Great", () => {
  it("should render hello with the name when name is provided", () => {
    render(<Greet name="John" />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Hello John");
  });

  it("should render login when the name is not provided ", () => {
    render(<Greet />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Login");
  });
});
