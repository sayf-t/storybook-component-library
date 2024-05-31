import React, { MouseEventHandler } from "react";

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
  role?: string;
  ariaLabel?: string;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  type?: CustomButtonType;
  variant?: CustomButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseOver?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  role = "button",
  ariaLabel,
  backgroundColor = "transparent",
  textColor = "inherit",
  width = "auto",
  height = "auto",
  disabled = false,
  onClick,
  onMouseOver,
}: CustomButtonProps) => {
  const style = {
    backgroundColor,
    color: textColor,
    width,
    height,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    whitespace: "normal",
  };

  return (
    <button
      role={role}
      aria-label={ariaLabel}
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {children}
    </button>
  );
};

export default Button;
