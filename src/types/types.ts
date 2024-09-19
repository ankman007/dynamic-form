import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";


type InputType = 'text' | 'email' | 'number' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio';


type Option = {
  value: string;
  label: string;
};

export type EventTypeProps = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement> | SelectChangeEvent<string>;

export type InputFieldProps = {
  type: InputType;
  label: string;
  name: string;
  required?: boolean;
  value: string | boolean;
  options?: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => void;
};

export type FieldProps = {
  name: string;
  type: InputType;
  label: string;
  options?: Option[];
  required?: boolean;
  placeholder?: string;
};
