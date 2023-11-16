"use client";
import FormRadioGroup from "@/components/FormRadioGroup";
import PageWrapper from "@/components/PageWrapper";

const values = ["Немає", "Є"];

export default function ActivityPage() {
  return (
    <PageWrapper title="Хвороби">
      <FormRadioGroup values={values} />
    </PageWrapper>
  );
}
