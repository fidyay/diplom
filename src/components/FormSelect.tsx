import { FormControl, FormLabel, Select, SxProps, Theme } from "@mui/material";

type TProps = {
  label: string;
  children: React.ReactNode[];
  sx?: SxProps<Theme>;
};
export default function FormSelect({ label, children, sx = {} }: TProps) {
  return (
    <FormControl sx={sx} fullWidth>
      <FormLabel>{label}</FormLabel>
      <Select>{children}</Select>
    </FormControl>
  );
}
