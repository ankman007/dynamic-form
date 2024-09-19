import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel, FormHelperText, SelectChangeEvent } from "@mui/material";
import { SelectComponentProps } from "../../types/types";

export const SelectComponent: React.FC<SelectComponentProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && required && !value) {
      setError(`${label} is required.`);
    } else {
      setError(null);
    }
  }, [value, required, label, active]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  const handleBlur = () => {
    if (required && !value) {
      setError(`${label} is required.`);
      setActive(true);
    }
  };

  return (
    <FormControl fullWidth variant="outlined" error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value || ""}
        onChange={handleChange}
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
