import { Typography } from "@mui/material";

export default function PageTitle({ children }: { children: string }) {
  return (
    <Typography component="h1" sx={{ m: "auto", textAlign: "center" }}>
      {children}
    </Typography>
  );
}
