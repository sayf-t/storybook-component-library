import { Accordion as MUIAccordian, AccordionProps as MUIAccordianProps } from "@mui/material";
import * as React from "react";

export interface AccordionProps extends MUIAccordianProps {
  defaultExpanded?: boolean;
}

export const Accordion = ({ children, ...props }: AccordionProps) => {
  return <MUIAccordian {...props}>{children}</MUIAccordian>;
};

export default Accordion;