import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
// utils
import { RouterWrappedComponent } from "utils/testing/setupJest";
// components
import { DueDateDropdown } from "components";
// data
import templateCardsVerbiage from "../../data/templateCards.json";

/*
 * From Chakra UI Accordion test file
 * https://bit.ly/3MFtwXq
 */
jest.mock("@chakra-ui/transition", () => ({
  ...jest.requireActual("@chakra-ui/transition"),
  Collapse: jest.fn(({ in: inProp, children }: any) => (
    <div hidden={!inProp}>{children}</div>
  )),
}));

const verbiage = templateCardsVerbiage.MCPAR.accordion;
const accordionComponent = (
  <RouterWrappedComponent>
    <DueDateDropdown verbiage={verbiage} />
  </RouterWrappedComponent>
);

describe("Test DueDateDropdown", () => {
  beforeEach(() => {
    render(accordionComponent);
  });

  test("Accordion is visible", () => {
    expect(screen.getByTestId("due-date-accordion")).toBeVisible();
  });
});

describe("Test DueDateDropdown accessibility", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(accordionComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
