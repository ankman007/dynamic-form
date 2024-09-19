type inputType =
  | "text"
  | "email"
  | "number"
  | "password"
  | "textarea"
  | "radio"
  | "select"
  | "checkbox";

type Option = {
  value: string;
  label: string;
};

export type EventTypeProps = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

export type InputFieldProps = {
  type: inputType;
  label: string;
  name: string;
  required?: boolean;
  value: string | boolean;
  options?: Option[];
  onChange: (e: EventTypeProps) => void;
};

export type FieldProps = {
  name: string;
  type: inputType;
  label: string;
  options?: Option[];
};
