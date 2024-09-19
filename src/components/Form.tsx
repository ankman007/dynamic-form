import React, { useState } from "react";
import InputField from "./InputField";
import data from "../data/fields.json";
import { FieldProps } from "../types/types";
import { Button, Box, Typography } from "@mui/material";

const fields: FieldProps[] = (data as { fields: FieldProps[] }).fields;

type FormData = {
  [key: string]: string | boolean | string[] | undefined; 
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string | boolean | string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
