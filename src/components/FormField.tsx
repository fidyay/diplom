import { FormControl, FormLabel, TextField } from "@mui/material";
import { ChangeEventHandler } from "react";

export default function FormField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <TextField value={value} onChange={onChange} />
    </FormControl>
  );
}
