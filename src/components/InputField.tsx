import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { InputFieldProps } from "../types/types";

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  name,
  value,
  required = true,
  options = [],
  onChange,
}) => {
  switch (type) {
    case "text":
    case "email":
    case "number":
    case "password":
      return (
        <TextField
          type={type}
          label={label}
          name={name}
          value={value as string}
          onChange={onChange}
          fullWidth
          required={required}
          variant="outlined"
        />
      );
    case "textarea":
      return (
        <TextField
          label={label}
          name={name}
          value={value as string}
          onChange={onChange}
          multiline
          rows={4}
          fullWidth
          required={required}
          variant="outlined"
        />
      );

    case "select":
      return (
        <FormControl fullWidth variant="outlined">
          <InputLabel>{label}</InputLabel>
          <Select
            name={name}
            value={value as string}
            onChange={onChange}
            required={required}
            label={label}
          >
            {options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case "checkbox":
      return (
        <FormControlLabel
          control={
            <Checkbox
              name={name}
              checked={value as boolean}
              onChange={onChange}
              required={required}
            />
          }
          label={label}
        />
      );
    case "radio":
      return (
        <FormControl>
          <label>{label}</label>
          <RadioGroup name={name} value={value as string} onChange={onChange}>
            {options?.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                    label={option.label}
                    
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    default:
      return null;
  }
};

export default InputField;
