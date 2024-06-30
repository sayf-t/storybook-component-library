import { Meta, StoryFn } from "@storybook/react";
import Typography from "../components/Typography";

export default {
  title: "Intro",
} as Meta;

const Template: StoryFn = () => (
    <div>
        <h1>Welcome to FalconUI</h1>
        <p>
        This is a collection of components that can be used to build web
        applications. Each component is documented with examples and usage
        guidelines.
        </p>
        <p>
        To get started, select a component from the sidebar or use the search bar
        to find a specific component. You can also use the controls panel to
        interact with the component and see how it behaves under different
        conditions.
        </p>
        <p>
        If you have any questions or need help, please refer to the documentation, or reach out to the FalconUI team for assistance at <Typography>sayfcodes@gmail.com</Typography>.
        </p>
    </div>
);

export const Intro = Template.bind({});