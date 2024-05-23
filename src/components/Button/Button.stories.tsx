import { Button } from "./Button";

export default {
  children: "",
  title: "Component/Button",
  component: Button,
};

const Template = (args: any) => {
  return <Button {...args} />;
};

const props = {
  defaultProps: () => ({}),
};

export const ButtonStory: any = Template.bind({});
const defaultProps = props.defaultProps();
ButtonStory.storyName = "Button";
ButtonStory.args = {
  ...defaultProps,
};

// make a button component that I can style, is accesssible
// eg what if I want to pass in className, styling, MUI button that I can edit, so I can add my own properties to
// 2 versions, MUI and one with custom button
