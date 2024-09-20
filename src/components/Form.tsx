import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import data from "../data/fields.json";
import { FieldProps, FormData, FormErrors } from "../types/types";
import { Button, Box, Typography } from "@mui/material";

const fields: FieldProps[] = (data as { fields: FieldProps[] }).fields;

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false); 

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error !== null);
    const isFormComplete = fields.every((field) => formData[field.name] !== undefined && formData[field.name] !== '');
    setIsFormValid(!hasErrors && isFormComplete);
  }, [errors, formData]);

  const handleChange = (name: string, value: string | boolean | object | string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };

  const handleError = (name: string, error: string | null) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
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
                options={field.options}
                value={formData[field.name] ?? (field.type === 'checkbox' ? false : '')}
                onChange={(value) => handleChange(field.name, value)}
                onError={(name, error) => handleError(name, error)}
                error={errors[field.name] ?? ''}
              />
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
            disabled={!isFormValid}
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
