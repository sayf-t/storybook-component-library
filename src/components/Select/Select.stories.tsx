import { StoryFn, Meta } from "@storybook/react";
import { SelectComponent, SelectProps } from "./Select";

export default {
  title: "Components/Select",
  component: SelectComponent,
} as Meta;

const Template: StoryFn<SelectProps> = (args) => <SelectComponent {...args} />;
export const Default = Template.bind({});
Default.args = {
  id: "select",
//   label: "Select",
  options: ["Option 1", "Option 2", "Option 3"],
  value: "Option 1",
  onChange: () => {},
};
