"use client";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 0,
        flexShrink: 0,
      }}
    >
      {pathname === "/" && (
        <Paper
          sx={{
            bgcolor: "primary.light",
            color: "primary.contrastText",
            width: 52,
            height: 52,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow: "0px 2px 4px 0.5px " + theme.palette.primary.main,
            fontWeight: 600,
            fontSize: 22,
          }}
        >
          logo
        </Paper>
      )}
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          color: "secondary.main",
        }}
      >
        Natural Cat{" "}
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "primary.main",
          }}
          component="span"
        >
          Food
        </Typography>
      </Typography>
      <Typography sx={{ color: "secondary.light", fontSize: 11 }}>
        Свіжа готова котяча їжа 🐱
      </Typography>
    </Box>
  );
}
