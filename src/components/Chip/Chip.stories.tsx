import { StoryFn, Meta } from "@storybook/react";
import Avatar from '@mui/material/Avatar';
import { Chip, ChipProps } from "./Chip";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Chip",
  component: Chip,
} as Meta;

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.storyName = "Chip";
Default.args = {
  label: "Test Chip",
  color: "primary",
  disabled: false,
  onClick: action("You clicked the chip."),
};

export const DeletableChip = Template.bind({});
DeletableChip.args = {
  label: "Test Chip",
  color: "primary",
  disabled: false,
  onDelete: action("You clicked the delete icon."),
};

export const AvatarChip = Template.bind({});
AvatarChip.args = {
  label: "Test Chip",
  color: "primary",
  disabled: false,
avatar: <Avatar>S</Avatar>,
};