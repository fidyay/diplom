import { Box } from "@mui/material";
import CancelButton from "./CancelButton";
import ContinueButton from "./ContinueButton";

export default function BottomButtons() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <ContinueButton onClick={() => 1} />
      <CancelButton onClick={() => 1} />
    </Box>
  );
}
