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
  onError,
  helperText,
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
  }, [value, required, label, active, onError, name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    console.log('event.target from tfc', event.target); 
    console.log('event from tfc', event); 
    console.log('newValue from tfc', newValue);
    onChange(newValue);
    setActive(true); 

    if (required && !newValue) {
      const errorMessage = `${label} is required.`;
      setError(errorMessage);
      onError?.(name, errorMessage);
    } else {
      setError(null);
      onError?.(name, null);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
    
    setActive(true);
    if (required && !value) {
      const errorMessage = `${label} is required.`;
      setError(errorMessage);
      onError?.(name, errorMessage);
    } else {
      setError(null);
      onError?.(name, null);
    }
  };

  return (
    <TextField
      type={type}
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
      required={required}
      variant="outlined"
      error={!!error}
      helperText={error || helperText}
    />
  );
};
