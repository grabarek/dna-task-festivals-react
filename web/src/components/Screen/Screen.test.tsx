import { render } from "@testing-library/react";
import { Screen } from "./Screen";
import userEvent from "@testing-library/user-event";

describe("Screen", () => {
  it("should render given title", () => {
    const title = "TEST";

    const { getByRole } = render(
      <Screen title={title} content={null} actions={[]} />,
    );

    const heading = getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toEqual(title);
  });

  it("should render content", () => {
    const { getByRole, getByText } = render(
      <Screen
        title="Screen title"
        content={
          <>
            <p>Text</p>
            <input type="text" name="input" />
            <button>BUTTON</button>
          </>
        }
        actions={[]}
      />,
    );

    expect(getByText("Text")).toBeInTheDocument();
    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should render actions", () => {
    const acceptFn = jest.fn();
    const declineFn = jest.fn();

    const { getByRole, getByText } = render(
      <Screen
        title="Screen title"
        content={null}
        actions={[
          { label: "accept", callback: acceptFn },
          { label: "decline", callback: declineFn },
        ]}
      />,
    );

    const acceptButton = getByRole("button", { name: "ACCEPT" });
    expect(acceptButton).toBeInTheDocument();
    userEvent.click(acceptButton);
    expect(acceptFn).toHaveBeenCalled();

    const declineButton = getByRole("button", { name: "DECLINE" });
    expect(declineButton).toBeInTheDocument();

    userEvent.click(declineButton);
    expect(declineFn).toHaveBeenCalled();
  });
});
