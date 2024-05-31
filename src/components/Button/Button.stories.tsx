import { Button, CustomButtonProps } from "./Button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    role: { control: 'text' },
    ariaLabel: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: CustomButtonProps) => {
  return <Button {...args} />;
};

const props = {
  defaultProps: () => ({
    children: "Test Button",
    role: "button",
    ariaLabel: "blue button",
    backgroundColor: "blue",
    width: "auto",
    height: "auto",
    disabled: false,
  }),
};

export const ButtonStory: any = Template.bind({});
const defaultProps = props.defaultProps();
ButtonStory.storyName = "Custom Button";
ButtonStory.args = {
  ...defaultProps, // Add the 'storyName' property to fix the error.
}; // Add 'as CustomButtonProps' to fix the error.
