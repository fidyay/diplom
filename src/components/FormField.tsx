import { FormControl, FormLabel, TextField } from "@mui/material";

export default function FormField({ label }: { label: string }) {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <TextField />
    </FormControl>
  );
}
