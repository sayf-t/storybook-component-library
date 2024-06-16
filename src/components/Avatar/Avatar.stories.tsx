import { StoryFn, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar"

export default {
  title: "Component/Avatar",
  component: Avatar,
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args}>A</Avatar>;

export const Default = Template.bind({});
Default.args = {
  variant: "circular",
  size: "medium",
};
