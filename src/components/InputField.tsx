import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { InputFieldProps } from "../types/types";
import { validateUserInput } from "../utils/validation";
import { CheckboxComponent } from "./Checkbox/Checkbox";
import { RadioComponent } from "./Radio/RadioComponent";
import { SelectComponent } from "./Select/SelectComponent";
import { TextFieldComponent } from "./TextField/TextFieldComponent";
import { FileUploadComponent } from "./FileUpload/FileUploadComponent";
import { DateFieldComponent } from "./DateField/DateFieldComponent";
import MultiSelectComponent from "./MultiSelect/MultiSelectComponent";

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  name,
  required = true,
  options = [],
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

    if (target.type === "checkbox") {
      handleCheckboxChange(event, target.checked); 
    } else if (target.type === "radio") {
      onChange(target.value);
    } else {
      onChange(target.value);
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event;
    onChange(selectedValue); 
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    onChange(checked);
  };

  return (
    <div>
      {["text", "email", "number", "password"].includes(type) ? (
        <TextFieldComponent
          type={type}
          label={label}
          name={name}
          value={value as string}
          onChange={handleChange}
          onBlur={handleBlur}
          localError={localError}
          helperText={helperText}
          required={required}
        />
      ) : null}

      {type === "textarea" ? (
        <TextFieldComponent
          type="textarea"
          label={label}
          name={name}
          value={value as string}
          onChange={handleChange}
          onBlur={handleBlur}
          localError={localError}
          helperText={helperText}
          required={required}
        />
      ) : null}

      {type === "select" ? (
        <SelectComponent
          label={label}
          name={name}
          value={value as string}
          onChange={handleSelectChange}
          onBlur={handleBlur}
          options={options}
          localError={localError}
          required={required}
        />
      ) : null}

      {type === "multi-select" ? (
        <MultiSelectComponent
          label={label}
          name={name}
          value={value as string[]}
          onChange={handleSelectChange}
          options={options}
          localError={localError}
          required={required}
        />
      ) : null}

      {type === "radio" ? (
        <RadioComponent
          label={label}
          name={name}
          value={value as string}
          onChange={handleChange}
          options={options}
          required={required}
        />
      ) : null}

      {["file", "image"].includes(type) ? (
        <FileUploadComponent
          label={label}
          name={name}
          onChange={handleChange}
        />
      ) : null}

      {type === "date" ? (
        <DateFieldComponent
          label={label}
          name={name}
          value={value as string}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          localError={localError}
          helperText={helperText}
        />
      ) : null}

      {type === "checkbox" ? (
        <CheckboxComponent
          name={name}
          label={label}
          value={value as boolean}
          onChange={handleCheckboxChange}
          required={false}
        />
      ) : null}
    </div>
  );
};

export default InputField;
