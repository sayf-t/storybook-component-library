import { Select, SelectChangeEvent, InputLabel, MenuItem, FormControl } from "@mui/material";
import * as React from "react";

export interface SelectProps {
  id?: string;
  label?: string;
  options: string[];
  value: string;
  onChange: (event: SelectChangeEvent) => void;
}

export const SelectComponent = ({ id, label, options, value, onChange }: SelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;