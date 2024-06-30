import { Meta, StoryFn } from "@storybook/react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
} as Meta;

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} >{args.children}</Typography>;

export const Default = Template.bind({});
Default.args = {
    children: "Default Typography",
};

export const Body1 = Template.bind({});
Body1.args = {
    children: "Body1 Typography",
    variant: "body1",
};

export const Body2 = Template.bind({});
Body2.args = {
    children: "Body2 Typography",
    variant: "body2",
};

export const ButtonText = Template.bind({});
ButtonText.args = {
    children: "Button Text Typography",
    variant: "button",
};

export const CaptionText = Template.bind({});
CaptionText.args = {
    children: "Caption Text Typography",
    variant: "caption",
};

export const OverlineText = Template.bind({});
OverlineText.args = {
    children: "Overline Text Typography",
    variant: "overline",
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
    children: "Subtitle1 Typography",
    variant: "subtitle1",
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
    children: "Subtitle2 Typography",
    variant: "subtitle2",
};

export const HeadingSmall = Template.bind({});
HeadingSmall.args = {
    children: "Heading Small",
    variant: "h6", // Adjusted to match MUI Typography variant prop
};

export const HeadingMedium = Template.bind({});
HeadingMedium.args = {
    children: "Heading Medium",
    variant: "h5", // Adjusted to match MUI Typography variant prop
};

export const HeadingLarge = Template.bind({});
HeadingLarge.args = {
    children: "Heading Large",
    variant: "h4", // Adjusted to match MUI Typography variant prop
};

export const HeadingExtraLarge = Template.bind({});
HeadingExtraLarge.args = {
    children: "Heading Extra Large",
    variant: "h3", // Adjusted to match MUI Typography variant prop
};