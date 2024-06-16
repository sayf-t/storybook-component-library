import React from "react";
import { Chip as MuiChip, ChipProps as MuiChipProps } from "@mui/material";

export interface ChipProps extends MuiChipProps {
  label: string;
  color?: "default" | "primary" | "secondary";
  disabled?: boolean;
  icon?: React.ReactElement;
  onDelete?: () => void;
  onClick?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  color,
  disabled,
  icon,
  onDelete,
  onClick,
  ...props
}) => {

  return (
    <MuiChip
      onDelete={onDelete}
      onClick={onClick}
      label={label}
      color={color}
      disabled={disabled}
      icon={icon}
      {...props}
    />
  );
};

export default Chip;
