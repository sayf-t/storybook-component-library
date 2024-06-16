import { TextField as MUITextField } from "@mui/material";

export interface TextFieldProps {
  id?: string;
  label?: string;
  variant?: "standard" | "outlined" | "filled";
}

export const TextField = ({ id, label, variant, ...props }: TextFieldProps) => {
  return <MUITextField id={id} label={label} variant={variant} {...props} />;
};

export default TextField;