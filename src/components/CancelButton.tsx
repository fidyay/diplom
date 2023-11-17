"use client";

import { Button } from "@mui/material";
import { Icon } from "@iconify/react";
import Link from "next/link";

type TProps = {
  href: string;
  disabled?: boolean;
};
export default function ContinueButton({ href, disabled }: TProps) {
  return (
    <Button
      href={href}
      LinkComponent={Link}
      startIcon={<Icon icon="icon-park-outline:back" />}
      variant="outlined"
      color="primary"
      disabled={disabled}
      fullWidth
      sx={{ my: 3, fontWeight: 600, gap: "12px" }}
    >
      Повернутись
    </Button>
  );
}
