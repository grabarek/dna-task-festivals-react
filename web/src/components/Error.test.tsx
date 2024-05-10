import { render } from "@testing-library/react";
import { Error } from "./Error";

describe("Error", () => {
  it("should not render if there is no message", () => {
    const { container } = render(<Error />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should not render if message is empty string", () => {
    const { container } = render(<Error message="" />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render styled message if not empty", () => {
    const message = "Lorem ipsum dolor sit amet";

    const { container } = render(<Error message={message} />);
    const content = container.firstElementChild;

    expect(content).toBeTruthy();
    expect(content!.textContent).toEqual(message);
    expect(content!.className).toEqual("error");
  });
});
