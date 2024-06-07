import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";

export interface ButtonProps extends MUIButtonProps {
  label: string;
  variant?: 'text' | 'contained' | 'outlined';
}

export const Button: React.FC<ButtonProps> = ({label, variant, ...props}) => {

  return (
    <MuiButton variant={variant} {...props}>
      {label}
    </MuiButton>
  );
};

// Button.defaultProps = {variant: "contained"};

export default Button;
