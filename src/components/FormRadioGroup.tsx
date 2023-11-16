import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  SxProps,
  Theme,
} from "@mui/material";

type TProps = {
  label?: string;
  values: string[];
  sx?: SxProps<Theme>;
};
export default function FormRadioGroup({ label, values, sx }: TProps) {
  return (
    <FormControl sx={sx}>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup defaultValue={values[0]} name="radio-buttons-group">
        {values.map((value) => {
          return (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={value}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
