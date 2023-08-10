import FetchData from "../FetchData/FetchData";
import {render as rtRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

const render = (component) =>
  rtRender(<Provider store={store}>{component}</Provider>);

describe("FetchComponent", () => {
  afterEach(() => jest.clearAllMocks());

  test("should fetch todos", async () => {
    render(<FetchData />);

    const mockdata = await screen.findAllByTestId("table-items");
    expect(mockdata.length).toEqual(20);
  });

  test("should display error if failed", async () => {
    store.dispatch({ type: "todos/fetchResponse/rejected" });

    render(<FetchData />);

    const errorElement = screen.queryByTestId("error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement.textContent).toBe("Unable to fetch data");
  });
});
