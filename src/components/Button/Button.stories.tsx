import { Button } from "./Button";

export default {
  title: "Component/Button",
  component: Button,
};

const Template = (args: any) => {
  const { children } = args;
  return <Button>{children}</Button>;
};

const props = {
  defaultProps: () => ({
    children: "Test Button",
  }),
};

export const ButtonStory: any = Template.bind({});
const defaultProps = props.defaultProps();
ButtonStory.storyName = "Custom Button";
ButtonStory.args = {
  ...defaultProps,
};
