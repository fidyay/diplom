"use client";
import ContinueButton from "@/components/ContinueButton";
import PageTitle from "@/components/PageTitle";
import { Box } from "@mui/material";
import CancelButton from "@/components/CancelButton";
import FormRadioGroup from "@/components/FormRadioGroup";

const values = ["Немає", "Є"];

export default function ActivityPage() {
  return (
    <Box>
      <PageTitle>Стерилізація</PageTitle>

      <FormRadioGroup values={values} />

      <ContinueButton onClick={() => 1} />
      <CancelButton onClick={() => 1} />
    </Box>
  );
}
