"use client";
import { MenuItem } from "@mui/material";
import FormSelect from "@/components/FormSelect";
import FormRadioGroup from "@/components/FormRadioGroup";
import FormStepper from "@/components/FormStepper";
import PageWrapper from "@/components/PageWrapper";

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
    <PageWrapper title="Мій кіт">
      <FormSelect label="Порода">
        {catBreeds.map((breed) => {
          return (
            <MenuItem key={breed} value={breed}>
              {breed}
            </MenuItem>
          );
        })}
      </FormSelect>

      <FormRadioGroup sx={{ my: 3 }} label="Стать" values={genders} />

      <FormStepper steps={steps} label="Вік" />
    </PageWrapper>
  );
}
