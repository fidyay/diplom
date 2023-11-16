"use client";
import FormSlider from "@/components/FormSlider";
import PageWrapper from "@/components/PageWrapper";

const activityBreakpoints = {
  "Серійний сонник": "До 20 хвилин ходьби на день",
  "Дещо активна": "0.5 - 1 година активностей на день",
  "Дуже активна": "2 - 3 години активностей на день",
  Атлет: "Більше 3 годин активностей на день",
};

export default function ActivityPage() {
  return (
    <PageWrapper title="Активність">
      <FormSlider label="Рівень активності" breakpoints={activityBreakpoints} />
    </PageWrapper>
  );
}
