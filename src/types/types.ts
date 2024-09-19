import { SelectChangeEvent } from "@mui/material";


type InputType = 'text' | 'email' | 'number' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'multiselect' | 'date' | 'image' | 'multi-select' | 'multiselect';


type Option = {
  value: string;
  label: string;
};

export type EventTypeProps = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | SelectChangeEvent<string> | SelectChangeEvent<string[]>;

export type InputFieldProps = {
  type: InputType;
  label: string;
  name: string;
  required?: boolean;
  options?: Option[];
  helperText?: string;
  error?: boolean;
  // value: string | boolean | string[];
};

export type FieldProps = {
  name: string;
  type: InputType;
  label: string;
  options?: Option[];
  required?: boolean;
  placeholder?: string;
};
