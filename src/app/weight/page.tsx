"use client";
import ContinueButton from "@/components/ContinueButton";
import PageTitle from "@/components/PageTitle";
import { Box, MenuItem } from "@mui/material";
import CancelButton from "@/components/CancelButton";
import FormSelect from "@/components/FormSelect";
import FormRadioGroup from "@/components/FormRadioGroup";
import FormStepper from "@/components/FormStepper";
import FormSlider from "@/components/FormSlider";

const catWeight = [
  "До 1 кг",
  "1 кг",
  "2 кг",
  "3 кг",
  "4 кг",
  "5 кг",
  "6 кг",
  "7 кг",
  "8 кг",
  "9 кг",
  "10 кг",
];

const weightBreakpoints = {
  "Трохи худа": "Вузька талія і добре видно ребра",
  "В самий раз":
    "Видима талія з деяким жировим покривом, але ребра легко промацати",
  "Трохи кремезна": "Талії не видно, а ребра важко промацати",
};

export default function BreedPage() {
  return (
    <Box>
      <PageTitle>Вага</PageTitle>

      <FormStepper steps={catWeight} />

      <FormSlider label="Статура" breakpoints={weightBreakpoints} />

      {/* <FormSelect label="Порода">
        {catBreeds.map((breed) => {
          return (
            <MenuItem key={breed} value={breed}>
              {breed}
            </MenuItem>
          );
        })}
      </FormSelect> */}

      {/* <FormRadioGroup label="Стать" values={genders} /> */}

      <ContinueButton onClick={() => 1} />
      <CancelButton onClick={() => 1} />
    </Box>
  );
}
