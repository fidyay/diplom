import { Box } from "@mui/material";

export default function Paws() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundImage: "url(paws.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 160,
        left: 0,
        right: 0,
        "& svg": {
          width: "100%",
        },
      }}
    />
  );
}
