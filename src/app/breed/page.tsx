"use client";
import ContinueButton from "@/components/ContinueButton";
import PageTitle from "@/components/PageTitle";
import { Box, MenuItem } from "@mui/material";
import CancelButton from "@/components/CancelButton";
import FormSelect from "@/components/FormSelect";
import FormRadioGroup from "@/components/FormRadioGroup";
import FormStepper from "@/components/FormStepper";

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

const steps = [
  "До трьох місяців",
  "3 - 6 місяців",
  "6 - 9 місяців",
  "9 - 12 місяців",
  "1 рік",
  "2 роки",
  "3 роки",
  "5 років",
  "6 років",
  "7 років",
  "8 років",
  "9 років",
  "10 років",
];

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

      <FormStepper steps={steps} label="Вік" />

      <ContinueButton onClick={() => 1} />
      <CancelButton onClick={() => 1} />
    </Box>
  );
}
