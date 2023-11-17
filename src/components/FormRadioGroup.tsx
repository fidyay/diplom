import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  SxProps,
  Theme,
} from "@mui/material";
import { ChangeEventHandler } from "react";

type TProps = {
  label?: string;
  values: string[];
  sx?: SxProps<Theme>;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
export default function FormRadioGroup({
  label,
  values,
  sx,
  value,
  onChange,
}: TProps) {
  return (
    <FormControl sx={sx}>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup
        value={value}
        onChange={onChange}
        defaultValue={values[0]}
        name="radio-buttons-group"
      >
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
