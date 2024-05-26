import React from "react";

export type CustomButtonType =
  | "primary"
  | "primary-variant"
  | "secondary"
  | "tertiary"
  | "critical"
  | "success"
  | "white"
  | "dark"
  | "default";

export type CustomButtonVariant = "contained" | "outline" | "text";

export interface CustomButtonProps {
  children: string;
}

export const Button: React.FC<CustomButtonProps> = (props) => {
  return <button>{props.children}</button>;
};

export default Button;
