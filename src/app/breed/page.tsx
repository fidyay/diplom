"use client";
import ContinueButton from "@/components/ContinueButton";
import PageTitle from "@/components/PageTitle";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import CancelButton from "@/components/CancelButton";
import FormSelect from "@/components/FormSelect";
import FormRadioGroup from "@/components/FormRadioGroup";

const catBreeds = [
  "Абісинська",
  "Бенгальска",
  "Британська довгошерста",
  "Британська короткошерста",
  "Мейн-кун",
  "Орієнтальна",
  "Шотландська висловуха",
  "Шотландська прямовуха",
];

const genders = ["Жіноча", "Чоловіча"];

export default function BreedPage() {
  return (
    <Box>
      <PageTitle>Мій кіт</PageTitle>
      <FormSelect label="Порода">
        {catBreeds.map((breed) => {
          return (
            <MenuItem key={breed} value={breed}>
              {breed}
            </MenuItem>
          );
        })}
      </FormSelect>

      <FormRadioGroup label="Стать" values={genders} />

      <ContinueButton onClick={() => 1} />
      <CancelButton onClick={() => 1} />
    </Box>
  );
}
