import { Box } from "@mui/material";
import PageTitle from "./PageTitle";
import BottomButtons from "./BottomButtons";

type TProps = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  previousLink: string;
  disabledContinue?: boolean;
  handleContinue: () => void;
};

export default function PageWrapper({
  title,
  children,
  previousLink,
  disabledContinue = false,
  handleContinue,
}: TProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <PageTitle>{title}</PageTitle>
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <BottomButtons
        previousLink={previousLink}
        disabledContinue={disabledContinue}
        handleContinue={handleContinue}
      />
    </Box>
  );
}
