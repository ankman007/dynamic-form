import { useState, useEffect } from "react";
import { TextField, FormHelperText } from "@mui/material";
import { DateFieldComponentProps } from "../../types/types";

export const DateFieldComponent: React.FC<DateFieldComponentProps> = ({
  label,
  name,
  value,
  onChange,
  onError,
  required = false,
  error,
}) => {
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched && required && !value) {
      const errorMessage = `${label} is required.`;
      onError?.(name, errorMessage);
    } else {
      onError?.(name, null);
    }
  }, [value, required, label, touched, onError, name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
    setTouched(true);
  };

  return (
    <>
      <TextField
        type="date"
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
        fullWidth
        required={required}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
      />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </>
  );
};
