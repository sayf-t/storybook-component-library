import { StoryFn, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default {
  title: "Component/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.storyName = "Button";
Default.args = {
  children: "Test Button",
  variant: "contained",
  size: "medium",
  color: "primary",
  disabled: false, 
};

export const Disabled = Template.bind({});
Disabled.storyName = "Disabled Button";
Disabled.args = {
  children: "Test Button",
  variant: "contained",
  size: "medium",
  color: "primary",
  disabled: true,
};

export const ButtonWithStartIcon = Template.bind({});
ButtonWithStartIcon.args = {
  children: "Test Button",
  variant: "contained",
  size: "medium",
  color: "primary",
  disabled: false,
  startIcon: <DeleteIcon />,
};
