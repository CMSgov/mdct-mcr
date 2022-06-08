import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dropdown } from "./Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "CMSDS/Dropdown",
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Dropdown Label",
  name: "Dropdown Name",
};

export const Small = Template.bind({});
Small.args = {
  label: "Dropdown Label",
  name: "Dropdown Name",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Dropdown Label",
  name: "Dropdown Name",
  size: "medium",
};

export const Error = Template.bind({});
Error.args = {
  label: "Dropdown Label",
  name: "Dropdown Name",
  errorMessage: "Example error message",
  hint: "Helpful hint text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Dropdown Label",
  name: "Dropdown Name",
  disabled: true,
};

export const Inversed = Template.bind({});
Inversed.args = {
  label: "Dropdown Label",
  name: "Dropdown Name",
  inversed: true,
};
