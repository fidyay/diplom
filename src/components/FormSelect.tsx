import {
  FormControl,
  FormLabel,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";

type TProps = {
  label: string;
  children: React.ReactNode[];
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
  sx?: SxProps<Theme>;
};
export default function FormSelect({
  label,
  children,
  sx = {},
  value,
  onChange,
}: TProps) {
  return (
    <FormControl sx={sx} fullWidth>
      <FormLabel>{label}</FormLabel>
      <Select value={value} onChange={onChange}>
        {children}
      </Select>
    </FormControl>
  );
}
