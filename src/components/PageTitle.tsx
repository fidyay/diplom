import { Typography } from "@mui/material";

export default function PageTitle({ children }: { children: string }) {
  return (
    <Typography
      component="h1"
      sx={{
        m: "auto",
        textAlign: "center",
        fontSize: 28,
        fontWeight: 500,
        color: "secondary.main",
        mt: 6,
      }}
    >
      {children}
    </Typography>
  );
}
