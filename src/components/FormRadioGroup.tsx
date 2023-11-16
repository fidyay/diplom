import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

type TProps = {
  label?: string;
  values: string[];
};
export default function FormRadioGroup({ label, values }: TProps) {
  return (
    <FormControl>
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
