"use client";
import ContinueButton from "@/components/ContinueButton";
import PageTitle from "@/components/PageTitle";
import { Box } from "@mui/material";
import CancelButton from "@/components/CancelButton";
import FormSlider from "@/components/FormSlider";

const activityBreakpoints = {
  "Серійний сонник": "До 20 хвилин ходьби на день",
  "Дещо активна": "0.5 - 1 година активностей на день",
  "Дуже активна": "2 - 3 години активностей на день",
  Атлет: "Більше 3 годин активностей на день",
};

export default function ActivityPage() {
  return (
    <Box>
      <PageTitle>Активність</PageTitle>

      <FormSlider label="Рівень активності" breakpoints={activityBreakpoints} />

      <ContinueButton onClick={() => 1} />
      <CancelButton onClick={() => 1} />
    </Box>
  );
}
