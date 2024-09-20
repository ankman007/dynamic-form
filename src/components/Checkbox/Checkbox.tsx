import React, { useState, useEffect } from "react";
import { Checkbox, FormControlLabel, FormHelperText, Box } from "@mui/material";

interface CustomCheckboxProps {
  name: string;
  label: string;
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  onError?: (name: string, error: string | null) => void;
  required?: boolean;
}

export const CheckboxComponent: React.FC<CustomCheckboxProps> = ({
  name,
  label,
  value,
  onChange,
  onError,
  required = false,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && required && !value) {
      const errorMessage = `${label} is required.`;
      setError(errorMessage);
      onError?.(name, errorMessage);
    } else {
      setError(null);
      onError?.(name, null);
    }
  }, [required, value, label, active, name, onError]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    onChange(event, checked);

    if (required && !checked) {
      const errorMessage = `${label} is required.`;
      setError(errorMessage);
      onError?.(name, errorMessage);
    } else {
      setError(null);
      onError?.(name, null);
      setActive(true);
    }
  };

  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            checked={value}
            onChange={handleChange}
            required={required}
          />
        }
        label={label}
      />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </Box>
  );
};
