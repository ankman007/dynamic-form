import React from "react";
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
  error,
}) => {

  const validate = (value: string) => {
    if (required && !value) {
      return `${label} is required.`;
    }
    return null;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
    onError?.(name, validate(newValue));  
  };

  const handleBlur = () => {
    if (onBlur) onBlur();
    onError?.(name, validate(value));  
  };

  return (
    <>
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
    </>
  );
};
