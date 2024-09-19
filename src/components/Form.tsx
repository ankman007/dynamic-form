import React, { useState } from "react";
import InputField from "./InputField";
import data from "../data/fields.json";
import { FieldProps, EventTypeProps } from "../types/types";
import { Button, Box, Typography, FormHelperText } from "@mui/material";

type FormData = { [key: string]: string | boolean };
type FormErrors = { [key: string]: string };

const fields: FieldProps[] = data.fields;

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: EventTypeProps) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required.`;
      }
      if (field.type === 'email' && formData[field.name] && !/\S+@\S+\.\S+/.test(formData[field.name] as string)) {
        newErrors[field.name] = 'Invalid email format.';
      }
      if (field.type === 'number' && formData[field.name] && isNaN(Number(formData[field.name]))) {
        newErrors[field.name] = 'Value must be a number.';
      }
    });

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {fields.map((field: FieldProps) => (
            <Box sx={{ marginBottom: 2 }} key={field.name}>
              <InputField
                type={field.type}
                name={field.name}
                label={field.label}
                value={formData[field.name] || ""}
                onChange={handleChange}
                options={field.options}
              />
              {errors[field.name] && (
                <FormHelperText error>{errors[field.name]}</FormHelperText>
              )}
            </Box>
          ))}
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#065143", 
              "&:hover": {
                backgroundColor: "#129490", 
              },
            }}
          >
            Submit
          </Button>
        </form>
      ) : (
        <Typography variant="h6">Thank you for submitting the form!</Typography>
      )}
    </Box>
  );
};

export default Form;
