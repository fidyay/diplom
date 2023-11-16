import { Box } from "@mui/material";

export default function Paws() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url(paws.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 165,
        "& svg": {
          width: "100%",
        },
      }}
    />
  );
}
