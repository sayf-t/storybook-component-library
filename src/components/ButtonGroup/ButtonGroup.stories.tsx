import { StoryFn, Meta } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "@mui/material";

export default {
  title: "Component/ButtonGroup",
  component: ButtonGroup,
} as Meta;

const Template: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
)

export const Default = Template.bind({});
Default.storyName = "Button Group Default";
Default.args = {
  size: "medium",
  variant: "contained",
  color: "primary",
  disabled: false,
  fullWidth: false,
  disableElevation: false,
  disableFocusRipple: false,
  disableRipple: false,
  orientation: "horizontal",
  "aria-label": "Button group",
};

