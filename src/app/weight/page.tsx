"use client";
import FormStepper from "@/components/FormStepper";
import FormSlider from "@/components/FormSlider";
import PageWrapper from "@/components/PageWrapper";

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
    <PageWrapper title="Вага">
      <FormStepper steps={catWeight} />

      <FormSlider label="Статура" breakpoints={weightBreakpoints} />
    </PageWrapper>
  );
}
