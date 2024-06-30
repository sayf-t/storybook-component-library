import { Typography as MuiTypography } from "@mui/material";

export interface TypographyProps {
  children: React.ReactNode;
  variant?:
    | "inherit"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "overline";
  component?: React.ElementType;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  classes?: object;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  variantMapping?: object;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { children } = props;
  return <MuiTypography {...props}>{children}</MuiTypography>;
};

export default Typography;