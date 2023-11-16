"use client";
import ContinueButton from "@/components/ContinueButton";
import PageTitle from "@/components/PageTitle";
import { Box } from "@mui/material";
import Paws from "@/components/Paws";
import FormField from "@/components/FormField";

export default function StartPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <PageTitle>Про мене</PageTitle>
        <FormField label="У мене є улюбленець на імʼя" />
        <FormField label="Мене звати" />
        <ContinueButton onClick={() => 1} />
      </Box>

      <Paws />
    </Box>
  );
}
