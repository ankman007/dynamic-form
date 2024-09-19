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
}) => {
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && required && !value) {
      setError(`Please select an option for ${label}`);
    } else {
      setError(null);
    }
  }, [value, required, label, active]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setActive(true); 
  };

  return (
    <FormControl error={!!error}>
      <label>{label}</label>
      <RadioGroup name={name} value={value} onChange={handleChange}>
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
