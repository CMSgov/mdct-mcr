import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
// utils
import { RouterWrappedComponent } from "utils/testing/setupJest";
//components
import { TemplateCard } from "components";

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

const templateCardComponent = (
  <RouterWrappedComponent>
    <TemplateCard templateName="MCPAR" />
  </RouterWrappedComponent>
);

describe("Test Template Download Card Item", () => {
  beforeEach(() => {
    render(templateCardComponent);
  });

  test("Template Download Card is visible", () => {
    expect(screen.getByTestId("template-download-card")).toBeVisible();
  });
});

describe("Test Template Download Card accessibility", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(templateCardComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});