import React from "react";
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
import { SelectComponentProps } from "../../types/types";

const MultiSelectComponent: React.FC<SelectComponentProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  localError,
}) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    console.log("event.target.value", event.target.value);
    // console.log('event.target', event.target)
    // console.log('event', event)
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined" error={!!localError}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        name={name}
        value={Array.isArray(value) ? value : []}
        onChange={handleChange}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {(selected as string[]).map((value) => (
              <Chip
                key={value}
                label={options.find((option) => option.value === value)?.label}
              />
            ))}
          </Box>
        )}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox
              checked={(value as unknown as string[]).includes(option.value)}
            />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
      {localError && <FormHelperText>{localError}</FormHelperText>}
    </FormControl>
  );
};

export default MultiSelectComponent;
