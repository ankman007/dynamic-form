export const validateUserInput = (
  type: string,
  value: string | boolean | string[],
  required: boolean,
  label: string
): string | null => {
  switch (type) {
    case "email": {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (required && !value) {
        return "Email is required";
      } else if (typeof value === "string" && !emailRegex.test(value)) {
        return "Enter a valid email address";
      }
      break;
    }

    case "number":
      if (required && !value) {
        return "Number is required";
      } else if (typeof value === "string" && isNaN(Number(value))) {
        return "Must be a valid number";
      }
      break;

    case "file":
      if (required && !value) {
        return "File upload is required";
      } else if (typeof value === "string" && value.length === 0) {
        return "Please upload a valid file";
      }
      break;

    case "image":
      if (required && !value) {
        return "Image is required";
      } else if (
        typeof value === "string" &&
        !/\.(jpg|jpeg|png|gif)$/i.test(value)
      ) {
        return "Please upload a valid image file (jpg, jpeg, png, gif)";
      }
      break;

    case "date":
      if (required && !value) {
        return "Date is required";
      } else if (typeof value === "string" && isNaN(Date.parse(value))) {
        return "Please enter a valid date";
      }
      break;

    case "text":
    case "textarea":
      if (
        required &&
        (!value || (typeof value === "string" && value.length === 0))
      ) {
        return `${label} is required`;
      }
      break;

    case "select":
      if (
        required &&
        (!value || (typeof value === "string" && value.length === 0))
      ) {
        return "Selection is required";
      }
      break;

    case "checkbox":
      if (required && value === false) {
        return "You must check this option";
      }
      break;

    case "radio":
      if (
        required &&
        (!value || (typeof value === "string" && value.length === 0))
      ) {
        return "You must select an option";
      }
      break;
      
    
    case "multi-select":
      if (required && (!Array.isArray(value) || value.length === 0)) {
        return `At least one ${label} must be selected`;
      }
      break;

    default:
      return null;
  }

  return null;
};
