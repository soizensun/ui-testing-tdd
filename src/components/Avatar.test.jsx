/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("should render element with role='img'", () => {
    render(<Avatar />);

    expect(screen.getByRole("img")).toBeDefined();
  });

  it("should have src inside element", () => {
    render(<Avatar src="https://something.com" />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://something.com"
    );
  });

  it("should render icon if no `src` provided", () => {
    render(<Avatar />);

    expect(screen.getByRole("img").firstChild.nodeName).toEqual("svg");
  });

  it("should be able to replace default icon with children", () => {
    render(<Avatar>SK</Avatar>);

    expect(screen.getByRole("img").textContent).toEqual("SK");
  });

  it("should spread other props to root element", () => {
    render(<Avatar aria-label="Jun" a="fasf" />);

    expect(screen.getByLabelText("Jun")).toBeDefined();
    expect(screen.getByRole("img")).toHaveAttribute(
      "a",
      "fasf"
    );
  });

  it("should receive style prop", () => {
    render(
      <Avatar aria-label="Jun" style={{ fontVariant: "no-contextual" }} />
    );

    expect(screen.getByLabelText("Jun")).toHaveStyle({
      "font-variant": "no-contextual",
    });
  });
});
