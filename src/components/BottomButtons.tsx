import { Box } from "@mui/material";
import CancelButton from "./CancelButton";
import ContinueButton from "./ContinueButton";

type TProps = {
  previousLink: string;
  disabledContinue: boolean;
  handleContinue: () => void;
};
export default function BottomButtons({
  previousLink,
  disabledContinue,
  handleContinue,
}: TProps) {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <ContinueButton disabled={disabledContinue} onClick={handleContinue} />
      <CancelButton href={previousLink} />
    </Box>
  );
}
