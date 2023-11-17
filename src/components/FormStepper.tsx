"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, FormControl, FormLabel, Button, Typography } from "@mui/material";
import { useCallback, useState } from "react";

type TIconButtonProps = {
  icon: string;
  onClick: () => void;
  disabled: boolean;
};
function AddSubstactButton({ icon, onClick, disabled }: TIconButtonProps) {
  return (
    <Button
      sx={{
        width: 44,
        height: 44,
        borderRadius: "8px",
        minWidth: 0,
        minHeight: 0,
        "& .MuiButton-startIcon": {
          mx: 0,
        },
      }}
      disabled={disabled}
      variant="contained"
      onClick={onClick}
      startIcon={<Icon fontSize="1.5rem" icon={icon} />}
    />
  );
}

type TProps = {
  label?: string;
  steps: string[];
  value: string;
  onChange: (val: string) => void;
};
export default function FormStepper({
  label = "",
  steps,
  value,
  onChange,
}: TProps) {
  const [step, setStep] = useState(
    steps.findIndex((step) => step === value) ?? 0
  );

  const addStep = useCallback(() => {
    if (step < steps.length - 1) {
      const newStep = step + 1;
      setStep(newStep);
      onChange(steps[newStep]);
    }
  }, [onChange, step, steps]);
  const substractStep = useCallback(() => {
    if (step > 0) {
      const newStep = step - 1;
      setStep(newStep);
      onChange(steps[newStep]);
    }
  }, [onChange, step, steps]);

  return (
    <FormControl fullWidth>
      {label && <FormLabel sx={{ mb: "16px" }}>{label}</FormLabel>}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AddSubstactButton
          icon="ic:round-minus"
          disabled={step === 0}
          onClick={substractStep}
        />

        <Typography sx={{ fontSize: 18 }}>{value}</Typography>

        <AddSubstactButton
          icon="ic:round-plus"
          disabled={step === steps.length - 1}
          onClick={addStep}
        />
      </Box>
    </FormControl>
  );
}
