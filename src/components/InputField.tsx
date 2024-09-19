import React from "react";
import { InputFieldProps } from "../types/types";
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

  const renderField = () => {
    switch (type) {
      case "text":
      case "email":
      case "number":
      case "password":
      case "textarea":
        return (
          <TextFieldComponent
            type={type === "textarea" ? "textarea" : type}
            label={label}
            name={name}
            value={value as string}
            onChange={onChange}
            helperText={helperText}
            required={required}
          />
        );

      case "select":
        return (
          <SelectComponent
            label={label}
            name={name}
            value={value as string}
            onChange={onChange}
            options={options}
            required={required}
          />
        );

      case "multi-select":
        return (
          <MultiSelectComponent
            label={label}
            name={name}
            value={value as string[]}
            onChange={onChange}
            options={options}
            required={required}
          />
        );

      case "radio":
        return (
          <RadioComponent
            label={label}
            name={name}
            value={value as string}
            onChange={onChange}
            options={options}
            required={required}
          />
        );

      case "checkbox":
        return (
          <CheckboxComponent
            name={name}
            label={label}
            value={value as boolean}
            onChange={onChange}
            required={required}
          />
        );

      case "file":
      case "image":
        return (
          <FileUploadComponent
            label={label}
            name={name}
            onChange={onChange}
          />
        );

      case "date":
        return (
          <DateFieldComponent
            label={label}
            name={name}
            value={value as string}
            onChange={onChange}
            required={required}
            helperText={helperText}
          />
        );

      default:
        return null;
    }
  };

  return <div>{renderField()}</div>;
};

export default InputField;
