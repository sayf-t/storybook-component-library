import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";

export interface ButtonProps extends MUIButtonProps {
  children: string | string[];
  size?: "small" | "medium" | "large";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  disabled?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  // accessibility, alt attributes, describedby, etc.
  // custom button animations, eg customAnimation?: boolean
}

export const Button: React.FC<ButtonProps> = ({children, size, color, disabled, startIcon, endIcon, ...props}) => {

  return (
    <MuiButton size={size} color={color} disabled={disabled} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </MuiButton>
  );
};

// Button.defaultProps = {variant: "contained"};

export default Button;