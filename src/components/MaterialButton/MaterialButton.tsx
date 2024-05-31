import React, { MouseEventHandler } from "react";
import { Button as MUIButton, ButtonProps as MUIButtonProps } from "@mui/material";
import {styled} from "@mui/material";

export type CustomButtonVariant = "contained" | "outlined" | "text";

export interface MaterialButtonProps extends MUIButtonProps {
    children: string;
    ariaLabel?: string;
    backgroundColor?: string;
    textColor?: string;
    width?: string;
    height?: string;
    variant?: CustomButtonVariant;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onMouseOver?: MouseEventHandler<HTMLButtonElement>;
  }

const StyledButton = styled(MUIButton)<MaterialButtonProps>(
    ({ backgroundColor, textColor, width, height }) => ({
      backgroundColor: backgroundColor || "transparent",
      color: textColor || "inherit",
      width: width || "auto",
      height: height || "auto",
      whiteSpace: "normal",
      wordBreak: "break-word",
      '&:disabled': {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    })
  );

export const MaterialButton: React.FC<MaterialButtonProps> = ({
    children,
    ariaLabel,
    backgroundColor,
    textColor,
    width,
    height,
    variant = "contained",
    disabled = false,
    onClick,
    onMouseOver,
    ...rest
}) => {
return (
    <StyledButton
        aria-label={ariaLabel}
        backgroundColor={backgroundColor}
        textColor={textColor}
        width={width}
        height={height}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onMouseOver}
        {...rest}
    >
        {children}
    </StyledButton>
);
};

export default MaterialButton;