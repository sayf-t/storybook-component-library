import { StoryFn, Meta } from "@storybook/react";
import { Accordion, AccordionProps } from "./Accordion";
import {
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default {
  title: "Component/Accordion",
  component: Accordion,
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => (
  <div>
    <Accordion {...args}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Accordion 1
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam alias
        illo laboriosam esse maiores velit iusto ducimus qui accusamus quos
        rerum repellendus aut quidem at voluptatibus impedit eaque, reiciendis
        veritatis.
      </AccordionDetails>
      <AccordionActions>
        <Button>Cancel</Button>
        <Button>Agree</Button>
      </AccordionActions>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Accordion 2
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam alias
        illo laboriosam esse maiores velit iusto ducimus qui accusamus quos
        rerum repellendus aut quidem at voluptatibus impedit eaque, reiciendis
        veritatis.
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Accordion 3
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam alias
        illo laboriosam esse maiores velit iusto ducimus qui accusamus quos
        rerum repellendus aut quidem at voluptatibus impedit eaque, reiciendis
        veritatis.
      </AccordionDetails>
    </Accordion>
  </div>
);

export const Default = Template.bind({});
