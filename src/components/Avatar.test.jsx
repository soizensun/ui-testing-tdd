/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import Avatar from "./Avatar"

describe("Avatar", () => {
    it("should render element with role='img'", () => {
        render(<Avatar />);
        expect(screen.getByRole("img")).toBeDefined();
    })

    it("should have src inside the element", () => {
        render(<Avatar src="www.something.com" />);
        expect(screen.getByRole("img")).toHaveAttribute("src", "www.something.com")
    })

    it("should render icon if no src provided", () => {
        render(<Avatar />);

        expect(screen.getByRole("img").firstChild.nodeName).toEqual('svg')
    })

    it("should be able to replace default icon with children", () => {
        render(<Avatar>ck</Avatar>);
        expect(screen.getByRole("img").textContent).toEqual("ck")
    })

    it("should spread other props to root element", () => {
        render(<Avatar aria-label="myAvatar" otherProps="otherProps" />)

        expect(screen.getByLabelText("myAvatar")).toBeDefined();
        expect(screen.getByRole("img")).toHaveAttribute(
            "otherProps",
            "otherProps"
        );
    })

    it("should receive style prop", () => {
        render(<Avatar style={{ fontVariant: "no-contextual" }}/>)

        expect(screen.getByRole("img")).toHaveStyle({
            "font-variant": "no-contextual",
          });
    })
})