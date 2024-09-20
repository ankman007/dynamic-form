import React, { useState, useEffect } from "react";
import { Radio, RadioGroup, FormControl, FormControlLabel, FormHelperText } from "@mui/material";
import { RadioComponentProps } from "../../types/types";

export const RadioComponent: React.FC<RadioComponentProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  required = false,
  onError,
  error
}) => {
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched && required && !value) {
      const errorMessage = `Please select an option for ${label}`;
      onError?.(name, errorMessage);
    } else {
      onError?.(name, null);
    }
  }, [value, required, label, touched, onError, name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
    setTouched(true);
  };

  return (
    <FormControl error={!!error}>
      <label>{label}</label>
      <RadioGroup name={name} value={value || ""} onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
