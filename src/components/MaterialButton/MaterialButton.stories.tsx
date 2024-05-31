import { MaterialButton, MaterialButtonProps } from "./MaterialButton";

export default {
  title: "Component/MaterialButton",
  component: MaterialButton,
  argTypes: {
    ariaLabel: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    variant: { control: { type: 'radio', options: ['contained', 'outlined', 'text'] } },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: MaterialButtonProps) => {
  return <MaterialButton {...args} />;
};

const props = {
  defaultProps: () => ({
    children: "Test Button",
    ariaLabel: "blue button",
    backgroundColor: "blue",
    textColor: "white",
    width: "auto",
    height: "auto",
    variant: "contained",
    disabled: false,
  }),
};

export const MaterialButtonStory: any = Template.bind({});
const defaultProps = props.defaultProps();
MaterialButtonStory.storyName = "Material Button";
MaterialButtonStory.args = {
  ...defaultProps,
};
