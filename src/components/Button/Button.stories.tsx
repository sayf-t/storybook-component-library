import { Button, ButtonProps } from "./Button";
import {StoryFn}  from "@storybook/react";

export default {
  title: "Component/Button",
  component: Button,
};

const Template = (args: ButtonProps) => {
  return (<Button {...args} />);
};

const props = {
  defaultProps: () => ({
    label: "Test Button",
    variant: "contained",
  }),
};

export const ButtonStory: StoryFn<typeof Button>  = Template.bind({});
const defaultProps = props.defaultProps();
ButtonStory.storyName = "Button";
ButtonStory.args = {
  ...defaultProps,
};
