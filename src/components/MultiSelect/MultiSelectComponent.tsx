import React, { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  Chip,
  SelectChangeEvent,
} from "@mui/material";
import { MultiSelectComponentProps } from "../../types/types";

const MultiSelectComponent: React.FC<MultiSelectComponentProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  onError,
  error
}) => {
  const selectedValues = Array.isArray(value) ? value : [];
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && required && selectedValues.length === 0) {
      const error = `${label} is required.`;
      if (onError) onError(name, error);
    } else {
      if (onError) onError(name, null);
    }
  }, [selectedValues, required, label, name, onError]);


  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const newValue = event.target.value as string[];
    
    onChange(newValue);

    if (required && newValue.length === 0) {
      const errorMessage = `${label} is required.`;
      if (onError) onError(name, errorMessage);
    } else {
      if (onError) onError(name, null);
      setActive(true);
    }
  };

  return (
    <FormControl fullWidth variant="outlined" error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        name={name}
        value={selectedValues}
        onChange={handleChange}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {(selected as string[]).map((selectedValue) => (
              <Chip
                key={selectedValue}
                label={options.find((option) => option.value === selectedValue)?.label}
              />
            ))}
          </Box>
        )}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={selectedValues.includes(option.value)} />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default MultiSelectComponent;
