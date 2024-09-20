import React, { useState, useEffect } from "react";
import { Checkbox, FormControlLabel, FormHelperText, Box } from "@mui/material";
import { CheckboxComponentProps } from "../../types/types";

export const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  name,
  label,
  value,
  onChange,
  onError,
  required = false,
  error
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && required && !value) {
      const errorMessage = `${label} is required.`;
      onError?.(name, errorMessage);
    } else {
      onError?.(name, null);
    }
  }, [required, value, label, active, name, onError]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    onChange(checked);

    if (required && !checked) {
      const errorMessage = `${label} is required.`;
      onError?.(name, errorMessage);
    } else {
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
