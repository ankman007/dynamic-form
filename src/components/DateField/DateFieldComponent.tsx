import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { DateFieldComponentProps } from '../../types/types';

export const DateFieldComponent: React.FC<DateFieldComponentProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  localError = null,
  helperText,
  required = false,
}) => {
  const [error, setError] = useState<string | null>(localError);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && required && !value) {
      setError(`${label} is required.`);
    } else {
      setError(null);
    }
  }, [value, required, label, active]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setActive(true);
  };

  return (
    <TextField
      type="date"
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      fullWidth
      required={required}
      variant="outlined"
      error={!!error}
      helperText={error || helperText}
      InputLabelProps={{ shrink: true }}
    />
  );
};
