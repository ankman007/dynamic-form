import { SelectChangeEvent } from "@mui/material";

type BaseFieldProps = {
  name: string;
  label: string;
  required?: boolean;
  error?: string | null;
  onError?: (name: string, error: string | null) => void;
};

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

export type InputFieldProps = BaseFieldProps & {
  type: InputType;
  value: string | boolean | string[];
  options?: Option[];
  helperText?: string;
  onChange: (value: string | boolean | string[]) => void;
};

export type CheckboxComponentProps = BaseFieldProps & {
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
};

export type RadioComponentProps = BaseFieldProps & {
  value: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type SelectComponentProps = BaseFieldProps & {
  value: unknown;
  options: Option[];
  onChange: (value: string) => void;
};

export type MultiSelectComponentProps = BaseFieldProps & {
  value: string[];
  options: Option[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
};

export type FileUploadComponentProps = BaseFieldProps & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type DateFieldComponentProps = BaseFieldProps & {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FormData = {
  [key: string]: string | boolean | string[] | undefined;
};

export type FormErrors = {
  [key: string]: string | null;
};
