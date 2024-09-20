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
  onError?: (name: string, error: string | null) => void;  
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
  onError?: (name: string, error: string | null) => void;  
  required?: boolean;
};

export type RadioComponentProps = {
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onError?: (name: string, error: string | null) => void;  
  options: Option[];
  required?: boolean;
};

export type SelectComponentProps = {
  name: string;
  label: string;
  value: unknown;
  onChange: (value: string) => void;
  onError?: (name: string, error: string | null) => void;  
  options: Option[];
  required?: boolean;
};

export type MultiSelectComponentProps = {
  name: string;
  label: string;
  value: string[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
  onError?: (name: string, error: string | null) => void;  
  options: Option[];
  required?: boolean;
};

export type TextFieldComponentProps = {
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  onError?: (name: string, error: string | null) => void;  
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
  onError?: (name: string, error: string | null) => void;  
  onBlur?: () => void;
  helperText?: string;
  required?: boolean;
};

export type FormData = {
  [key: string]: string | boolean | string[] | undefined; 
};

export type FormErrors = {
  [key: string]: string | null;
};