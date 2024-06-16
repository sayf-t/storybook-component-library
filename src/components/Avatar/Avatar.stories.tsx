import { StoryFn, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar"
import { AvatarGroup } from "@mui/material";

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

export const Grouped: StoryFn<AvatarProps> = (args) => (
  <AvatarGroup max={4}>
    <Avatar {...args}>A</Avatar>
    <Avatar {...args}>B</Avatar>
    <Avatar {...args}>C</Avatar>
    <Avatar {...args}>D</Avatar>
  </AvatarGroup>
);
Grouped.args = {
  variant: "circular",
  size: "small",
};
