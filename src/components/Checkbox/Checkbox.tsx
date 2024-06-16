import { Checkbox as MUICheckbox, CheckboxProps as MUICheckboxProps } from "@mui/material";

export interface CheckboxProps extends MUICheckboxProps {
  label?: { inputProps: { "aria-label": string } } 
}

export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return <MUICheckbox {...label} {...props} />;
};

export default Checkbox;
