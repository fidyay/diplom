"use client";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import FormSelect from "@/components/FormSelect";
import FormRadioGroup from "@/components/FormRadioGroup";
import FormStepper from "@/components/FormStepper";
import PageWrapper from "@/components/PageWrapper";
import store, { catBreeds, catAges, genders } from "@/core/store";
import { observer } from "mobx-react";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useCallback, useState } from "react";

export default observer(function BreedPage() {
  const router = useRouter();
  const [breed, setBreed] = useState(store.catBreed);
  const [gender, setGender] = useState(store.catGender);
  const [age, setAge] = useState(store.catAge);

  const handleChangeBreed = useCallback((e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    if (value) setBreed(value);
  }, []);
  const handleChangeGender: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const value = e.target.value;
      if (value) setGender(value);
    },
    []
  );

  const handleContinue = useCallback(() => {
    router.push("/activity");
    store.catAge = age;
    store.catBreed = breed;
    store.catGender = gender;
  }, [age, breed, gender, router]);

  return (
    <PageWrapper
      title="Мій кіт"
      previousLink="/"
      handleContinue={handleContinue}
    >
      <FormSelect value={breed} onChange={handleChangeBreed} label="Порода">
        {catBreeds.map((breed) => {
          return (
            <MenuItem key={breed} value={breed}>
              {breed}
            </MenuItem>
          );
        })}
      </FormSelect>

      <FormRadioGroup
        onChange={handleChangeGender}
        value={gender}
        sx={{ my: 3 }}
        label="Стать"
        values={genders}
      />

      <FormStepper value={age} onChange={setAge} steps={catAges} label="Вік" />
    </PageWrapper>
  );
});
