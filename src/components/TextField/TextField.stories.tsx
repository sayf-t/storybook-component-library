import { Meta, StoryFn } from "@storybook/react";
import { TextField, TextFieldProps } from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "standard",
  label: "Text Field",
  id: "text-field",
};