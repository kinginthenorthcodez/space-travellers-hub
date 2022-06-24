import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Myprofile from "../components/myprofile/index";
import setupStore from "./configureStore";

describe("Test rockets in the MyProfile components", () => {
  test("The profile page renders correctly", () => {
    const store = setupStore(false);
    const page = render(
      <Provider store={store}>
        <Myprofile />
      </Provider>
    );
    expect(page).toMatchSnapshot();
  });

  test("Shows the rocket reserved in the profile page", () => {
    const store = setupStore(true);
    const { container } = render(
      <Provider store={store}>
        <Myprofile />
      </Provider>
    );
    expect(container.getElementsByClassName("rocket-container")).toHaveLength(
      1
    );
    expect(screen.queryByText(" No Rockets Reserved Yet")).toBeFalsy();
  });
});
