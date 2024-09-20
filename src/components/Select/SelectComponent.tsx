import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";
import { SelectComponentProps } from "../../types/types";

export const SelectComponent: React.FC<SelectComponentProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  onError,
  error
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && required && !value) {
      const errorMessage = `${label} is required.`;
      if (onError) onError(name, errorMessage);
    } else {
      if (onError) onError(name, null);
    }
  }, [value, required, label, active, name, onError]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);

    if (required && !selectedValue) {
      const errorMessage = `${label} is required.`;
      if (onError) onError(name, errorMessage);
    } else {
      if (onError) onError(name, null);
    }
  };

  const handleBlur = () => {
    if (required && !value) {
      const errorMessage = `${label} is required.`;
      setActive(true);
      if (onError) onError(name, errorMessage);
    }
  };

  return (
    <FormControl fullWidth variant="outlined" error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
