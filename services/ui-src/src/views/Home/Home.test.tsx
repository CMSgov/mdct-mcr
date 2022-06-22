import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
// utils
import { RouterWrappedComponent } from "utils/testing/setupJest";
// views
import { Home } from "../index";

const homeView = (
  <RouterWrappedComponent>
    <Home />
  </RouterWrappedComponent>
);

describe("Test Home view", () => {
  beforeEach(() => {
    render(homeView);
  });

  test("Check that Home view renders", () => {
    expect(screen.getByTestId("home-view")).toBeVisible();
  });
});

describe("Test Home view accessibility", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(homeView);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
