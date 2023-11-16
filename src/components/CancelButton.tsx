"use client";

import { Button } from "@mui/material";
import { Icon } from "@iconify/react";

type TProps = {
  onClick: () => void;
  disabled?: boolean;
};
export default function ContinueButton({ onClick, disabled }: TProps) {
  return (
    <Button
      startIcon={<Icon icon="icon-park-outline:back" />}
      variant="outlined"
      color="primary"
      disabled={disabled}
      onClick={onClick}
      fullWidth
      sx={{ mt: 3 }}
    >
      Повернутись
    </Button>
  );
}