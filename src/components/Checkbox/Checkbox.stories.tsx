import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: { inputProps: { "aria-label": "Checkbox" } },
};
