import React, { useState } from "react";
import { Button, Box, Typography, FormHelperText } from "@mui/material";
import { FileUploadComponentProps } from "../../types/types";

export const FileUploadComponent: React.FC<FileUploadComponentProps> = ({
  label,
  name,
  onChange,
  onError,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      if (file.size > 100000000) {
        const errorMessage = "File size is too big.";
        setError(errorMessage);
        onError?.(name, errorMessage);
        return;
      }

      setError(null); 
      onError?.(name, null); 
      onChange(file); 
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Typography style={{ marginRight: "8px" }}>{label}</Typography>
      <Button
        sx={{ backgroundColor: "#129490", color: "white" }}
        component="label"
        size="small"
      >
        Choose File
        <input
          type="file"
          name={name}
          onChange={handleFileChange}
          hidden
        />
      </Button>
      {error && <FormHelperText error>{error}</FormHelperText>} 
    </Box>
  );
};
