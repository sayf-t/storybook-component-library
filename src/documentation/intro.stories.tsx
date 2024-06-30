import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Documentation/Intro",
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

        <h2>Feedback</h2>
        <p>
        If you have any questions or need help, please refer to the documentation, or reach out to the FalconUI team for assistance at <a>sayfcodes@gmail.com</a>.
        </p>
    </div>
);

export const Intro = Template.bind({});