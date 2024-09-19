import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { TextFieldComponentProps } from "../../types/types";

export const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
  type,
  label,
  name,
  value,
  onChange,
  onBlur,
  helperText,
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
  }, [value, required, label]);

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
    
    if (required && !value) {
      setError(`${label} is required.`);
    } else {
      setError(null);
      setActive(true);
    }
  };

  return (
    <TextField
      type={type}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={handleBlur}
      fullWidth
      required={required}
      variant="outlined"
      error={!!error}
      helperText={error || helperText}
    />
  );
};
