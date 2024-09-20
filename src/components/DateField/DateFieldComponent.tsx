import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { DateFieldComponentProps } from '../../types/types';

export const DateFieldComponent: React.FC<DateFieldComponentProps> = ({
  label,
  name,
  value,
  onChange,
  onError,
  helperText,
  required = false,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched && required && !value) {
      const errorMessage = `${label} is required.`;
      setError(errorMessage);
      onError?.(name, errorMessage);
    } else {
      setError(null);
      onError?.(name, null);
    }
  }, [value, required, label, touched, onError, name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
    setTouched(true);
  };

  return (
    <TextField
      type="date"
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      fullWidth
      required={required}
      variant="outlined"
      error={!!error}
      helperText={error || helperText}
      InputLabelProps={{ shrink: true }}
    />
  );
};
