import * as React from "react";
import {
  Avatar as MUIAvatar,
  AvatarProps as MUIAvatarProps,
} from "@mui/material";

export interface AvatarProps extends MUIAvatarProps {
  children: React.ReactElement | string | number | null;
  size?: "small" | "medium" | "large";
  variant?: "circular" | "rounded" | "square";
}

export const Avatar = ({ children, ...props }: AvatarProps) => {
  return <MUIAvatar {...props}>{children}</MUIAvatar>;
};

export default Avatar;
