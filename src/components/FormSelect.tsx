import { FormControl, FormLabel, Select } from "@mui/material";

type TProps = {
  label: string;
  children: React.ReactNode[];
};
export default function FormSelect({ label, children }: TProps) {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <Select>{children}</Select>
    </FormControl>
  );
}
