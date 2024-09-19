import React, { useState } from "react";
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
  FormHelperText,
  Button,
  Box,
  Chip,
  ListItemText,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { InputFieldProps } from "../types/types";
import { validateUserInput } from "../utils/validation";

const isCheckbox = (element: EventTarget | null): element is HTMLInputElement =>
  element instanceof HTMLInputElement && element.type === "checkbox";

const isRadio = (element: EventTarget | null): element is HTMLInputElement =>
  element instanceof HTMLInputElement && element.type === "radio";

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  name,
  required = true,
  options = [],
  error,
  helperText,
  onChange,
  value,
}) => {
  const [localError, setLocalError] = useState<string | null>(null);

  const handleBlur = () => {
    const userValidation = validateUserInput(type, value, required, label);
    setLocalError(userValidation);
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = event.target;

    if (isCheckbox(target)) {
      onChange(target.checked);
    } else if (isRadio(target)) {
      onChange(target.value);
    } else {
      onChange(target.value);
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  const handleMultiSelectChange = (event: SelectChangeEvent<string[]>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {type === "text" ||
      type === "email" ||
      type === "number" ||
      type === "password" ? (
        <TextField
          type={type}
          label={label}
          name={name}
          value={value as string}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
          required={required}
          variant="outlined"
          error={!!localError || !!error}
          helperText={localError || helperText}
        />
      ) : null}

      {type === "textarea" ? (
        <TextField
          label={label}
          name={name}
          value={value as string}
          onChange={handleChange}
          onBlur={handleBlur}
          multiline
          rows={4}
          fullWidth
          required={required}
          variant="outlined"
          error={!!localError || !!error}
          helperText={localError || helperText}
        />
      ) : null}

      {type === "select" ? (
        <FormControl
          fullWidth
          variant="outlined"
          error={!!localError || !!error}
        >
          <InputLabel>{label}</InputLabel>
          <Select
            name={name}
            value={value as string}
            onChange={handleSelectChange}
            onBlur={handleBlur}
            required={required}
            label={label}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {localError && <FormHelperText>{localError}</FormHelperText>}
        </FormControl>
      ) : null}

      {type === "multi-select" ? (
        <FormControl
          fullWidth
          variant="outlined"
          error={!!localError || !!error}
        >
          <InputLabel>{label}</InputLabel>
          <Select
            multiple
            name={name}
            value={Array.isArray(value) ? value : []}
            onChange={handleMultiSelectChange}
            onBlur={handleBlur}
            required={required}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {(selected as string[]).map((value) => (
                  <Chip
                    key={value}
                    label={
                      options.find((option) => option.value === value)?.label
                    }
                  />
                ))}
              </Box>
            )}
            label={label}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Checkbox
                  checked={(value as string[]).includes(option.value)}
                />
                <ListItemText primary={option.label} />
              </MenuItem>
            ))}
          </Select>
          {localError && <FormHelperText>{localError}</FormHelperText>}
        </FormControl>
      ) : null}

      {type === "radio" ? (
        <FormControl error={!!localError || !!error}>
          <label>{label}</label>
          <RadioGroup
            name={name}
            value={value as string}
            onChange={handleChange}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          {localError && <FormHelperText>{localError}</FormHelperText>}
        </FormControl>
      ) : null}

      {type === "file" || type === "image" ? (
        <Box display="flex" alignItems="center">
          <Typography style={{ marginRight: "8px" }}>{label}</Typography>
          <Button
            sx={{ backgroundColor: "#129490", color: "white" }}
            component="label"
            size="small"
          >
            Choose File
            <input
              type="file"
              name={name}
              onChange={handleChange}
              hidden
              accept={type === "image" ? "image/*" : undefined}
            />
          </Button>
        </Box>
      ) : null}

      {type === "date" ? (
        <TextField
          type="date"
          label={label}
          name={name}
          value={value as string}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
          required={required}
          variant="outlined"
          error={!!localError || !!error}
          helperText={localError || helperText}
          InputLabelProps={{ shrink: true }}
        />
      ) : null}

      {type === "checkbox" ? (
        <FormControlLabel
          control={
            <Checkbox
              name={name}
              checked={value as boolean}
              onChange={handleChange}
              required={required}
            />
          }
          label={label}
        />
      ) : null}
    </div>
  );
};

export default InputField;
