import { ReactNode } from "react";
import  { ButtonGroupPropsSizeOverrides, ButtonGroup as MuiButtonGroup} from "@mui/material";

interface ButtonGroupProps extends ButtonGroupPropsSizeOverrides{
  children: ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  disabled?: boolean;
  fullWidth?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  orientation?: "horizontal" | "vertical";
  "aria-label"?: string;
}

export const ButtonGroup = ({children, ...props}: ButtonGroupProps) => {
  return (
    <MuiButtonGroup {...props}>
      {children}
    </MuiButtonGroup>
  );
};

export default ButtonGroup;
