import React, { useState } from "react";
import InputField from "./InputField";
import data from "../data/fields.json";
import { FieldProps } from "../types/types";
import { Button, Box, Typography } from "@mui/material";

const fields: FieldProps[] = (data as { fields: FieldProps[] }).fields;

const Form: React.FC = () => {
  // const [formData, setFormData] = useState<{ [key: string]: string | boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process formData here if needed
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
