"use client";

import { Button } from "@mui/material";

type TProps = {
  onClick: () => void;
  disabled?: boolean;
};
export default function ContinueButton({ onClick, disabled }: TProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={onClick}
      fullWidth
      sx={{ mt: 3, fontWeight: 600 }}
    >
      Продовжити
    </Button>
  );
}
