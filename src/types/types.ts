import { SelectChangeEvent } from "@mui/material";

type BaseFieldProps = {
  name: string;
  label: string;
  required?: boolean;
  error?: string | null;
  onError?: (name: string, error: string | null) => void;
};

export type InputType =
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

export type FieldProps = {
  name: string;
  type: string;
  label: string;
  options?: { value: string; label: string }[];
}

export type EventTypeProps =
  | React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  | SelectChangeEvent<string>
  | SelectChangeEvent<string[]>;

export type InputFieldProps = BaseFieldProps & {
  type: string;
  value: string | boolean | string[] | object;
  options?: Option[];
  helperText?: string;
  onChange: (value: string | boolean | string[] | object) => void;
};

export type TextFieldComponentProps = BaseFieldProps & {
  type: string;
  value: string; 
  helperText?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export type CheckboxComponentProps = BaseFieldProps & {
  value: boolean;
  onChange: (value: boolean) => void;

};

export type RadioComponentProps = BaseFieldProps & {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export type SelectComponentProps = BaseFieldProps & {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export type MultiSelectComponentProps = BaseFieldProps & {
  value: string[];
  options: Option[];
  onChange: (value: string[]) => void;
};

export type FileUploadComponentProps = BaseFieldProps & {
  onChange: (value: object) => void;
};

export type DateFieldComponentProps = BaseFieldProps & {
  value: string;
  onChange: (value: string) => void;
};


export type FormData = {
  [key: string]: string | boolean | string[] | object | undefined;
};

export type FormErrors = {
  [key: string]: string | null;
};
