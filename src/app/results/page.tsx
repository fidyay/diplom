"use client";
import PageWrapper from "@/components/PageWrapper";
import store from "@/core/store";
import roundNumber from "@/utils/roundNumber";
import { Typography } from "@mui/material";
import { observer } from "mobx-react";
import { useCallback } from "react";

export default observer(function ResultsPage() {
  const handleContinue = useCallback(() => {}, []);

  return (
    <PageWrapper
      handleContinue={handleContinue}
      previousLink="/sterilization"
      disabledContinue
      title="Результати"
    >
      <Typography sx={{ fontWeight: 600 }}>
        Отже, {store.userName}, для для вашого(-ої) {store.catName} з такими
        параметрами:
      </Typography>
      <Typography>Вага: {store.catWeight.toLowerCase()}</Typography>
      <Typography>Порода: {store.catBreed.toLowerCase()}</Typography>
      <Typography>Стать: {store.catGender.toLowerCase()}</Typography>
      <Typography>Вік: {store.catAge.toLowerCase()}</Typography>
      <Typography>Статура: {store.catWaist.toLowerCase()}</Typography>
      <Typography>Активність: {store.catActivity.toLowerCase()}</Typography>
      <Typography>Хвороби: {store.hasIllness ? "Є" : "Немає"}</Typography>
      <Typography>
        Стерилізація: {store.hasSterilization ? "Є" : "Немає"}
      </Typography>
      <Typography sx={{ fontWeight: 600 }}>
        Були отримані такі результати:
      </Typography>
      <Typography>
        Денна норма білків: {roundNumber(store.dailyProteingRequirement, 2)} г
      </Typography>
      <Typography>
        Денна норма жиру: {roundNumber(store.dailyFatRequirement.min, 2)} -{" "}
        {roundNumber(store.dailyFatRequirement.max, 2)} г
      </Typography>
      <Typography>
        Потреба енергії в стані спокою: {roundNumber(store.RER, 2)} ккал/день
      </Typography>
      <Typography>
        Оцінка щоденних потреб кішки в калоріях з урахуванням її рівня
        активності: {roundNumber(store.AER, 2)} ккал/день
      </Typography>

      <Typography
        color="error"
        sx={{ fontWeight: 600, textAlign: "center", mt: 1 }}
      >
        !!!!Раціони в розробці
      </Typography>
    </PageWrapper>
  );
});
