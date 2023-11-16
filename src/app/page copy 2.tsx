"use client";
import ContinueButton from "@/components/ContinueButton";
import PageTitle from "@/components/PageTitle";
import { Box, TextField } from "@mui/material";
import Paws from "@/components/svg_components/Paws";

export default function StartPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <PageTitle>Про мене</PageTitle>
        <TextField label="У мене є улюбленець на імʼя" />
        <TextField label="Мене звати" />
        <ContinueButton onClick={() => 1} />
      </Box>

      <Paws />
    </Box>
  );
}
