import { Switch as MUISwitch, SwitchProps as MUISwitchProps } from "@mui/material";

export interface SwitchProps extends MUISwitchProps {
  label?: { inputProps: { "aria-label": string }} ;
}

export const Switch = ({ label, ...props }: SwitchProps) => {
  return <MUISwitch {...label} {...props} />;
};

export default Switch;