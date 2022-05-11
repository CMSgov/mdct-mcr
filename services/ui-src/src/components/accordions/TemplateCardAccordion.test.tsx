import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
// utils
import { RouterWrappedComponent } from "utils/testing/setupJest";
// components
import { TemplateCardAccordion } from "components";
// data
import data from "../../data/home-view.json";

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

const accordionComponent = (
  <RouterWrappedComponent>
    <TemplateCardAccordion verbiage={data.cards.MCPAR} />
  </RouterWrappedComponent>
);

describe("Test TemplateCardAccordion", () => {
  beforeEach(() => {
    render(accordionComponent);
  });

  test("Accordion is visible", () => {
    expect(screen.getByTestId("template-card-accordion")).toBeVisible();
  });
});

describe("Test TemplateCardAccordion accessibility", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(accordionComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
