import { SelectChangeEvent } from "@mui/material";

type InputType =
  | "text"
  | "email"
  | "number"
  | "password"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "file"
  | "multi-select"
  | "date"
  | "image";

type Option = {
  value: string;
  label: string;
};

export type EventTypeProps =
  | React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  | SelectChangeEvent<string>
  | SelectChangeEvent<string[]>;

export type InputFieldProps = {
  type: InputType;
  label: string;
  name: string;
  required?: boolean;
  value: string | boolean | string[]; 
  options?: Option[]; 
  helperText?: string; 
  onChange: (value: string | boolean | string[]) => void; 
};

export type FieldProps = {
  name: string;
  type: InputType;
  label: string;
  options?: Option[];
  required?: boolean;
  placeholder?: string; 
};

export type CheckboxComponentProps = {
  name: string;
  label: string;
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;

  required?: boolean;
  localError?: string | null;
};

export type RadioComponentProps = {
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: Option[];
  required?: boolean;
  localError?: string | null;
};

export type SelectComponentProps = {
  name: string;
  label: string;
  value: string;
  // onChange: (event: SelectChangeEvent<string>) => void;
  onChange: (value: string) => void;
  options: Option[];
  localError?: string | null;
  required?: boolean;
};

export type MultiSelectComponentProps = {
  name: string;
  label: string;
  value: string[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
  options: Option[];
  required?: boolean;
  localError?: string | null;
};

export type TextFieldComponentProps = {
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  localError?: string | null;
  helperText?: string;
  required?: boolean;
};

export type FileUploadComponentProps = {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type DateFieldComponentProps = {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  localError?: string | null;
  helperText?: string;
  required?: boolean;
};
