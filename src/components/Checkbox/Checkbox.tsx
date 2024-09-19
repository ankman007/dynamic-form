import React, { useState, useEffect } from "react";
import { Checkbox, FormControlLabel, FormHelperText, Box } from "@mui/material";

interface CustomCheckboxProps {
  name: string;
  label: string;
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  required?: boolean;
}

export const CheckboxComponent: React.FC<CustomCheckboxProps> = ({
  name,
  label,
  value,
  onChange,
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
  }, [required, value, label, active]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    onChange(event, checked);

    if (required && !checked) {
      setError(`${label} is required.`);
    } else {
      setError(null);
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
