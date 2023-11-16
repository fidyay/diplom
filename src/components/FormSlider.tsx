"use client";
import hexToRGBA from "@/utils/hexToRGBA";
import { Theme } from "@emotion/react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

type TBreakpointButtonProps = {
  onClick: () => void;
  active: boolean;
};
function BreakpointButton({ onClick, active }: TBreakpointButtonProps) {
  const theme = useTheme();
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "28px",
        height: "28px",
        borderRadius: "100%",
        flexGrow: 0,
        flexShrink: 0,
        bgcolor: "primary.contrastText",
        color: theme.palette.secondary.light,
        outline: active ? "3px solid " + theme.palette.primary.main : "",
        boxShadow: "0px 0px 2px 0px " + theme.palette.secondary.light,
      }}
    />
  );
}

function Connector() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: 2,
        bgcolor: hexToRGBA(theme.palette.secondary.light, 0.2),
      }}
    />
  );
}

type TProps = {
  label: string;
  breakpoints: Record<string, string>;
  sx?: SxProps<Theme>;
};

export default function FormSlider({ label, breakpoints, sx }: TProps) {
  const breakpointsArray = Object.keys(breakpoints);
  const [selectedBreakpoint, setSelectedBreakpoint] = useState(
    breakpointsArray[0]
  );
  return (
    <FormControl sx={sx} fullWidth>
      <FormLabel sx={{ mb: "16px" }}>{label}</FormLabel>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          {breakpointsArray.map((breakpoint, index) => {
            const isLast = index === breakpointsArray.length - 1;
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: isLast ? 0 : 1,
                }}
                key={breakpoint}
              >
                <BreakpointButton
                  onClick={() => setSelectedBreakpoint(breakpoint)}
                  active={breakpoint === selectedBreakpoint}
                />
                {!isLast && <Connector />}
              </Box>
            );
          })}
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 500,
              color: "secondary.main",
            }}
          >
            {selectedBreakpoint}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 400,
              color: "secondary.main",
            }}
          >
            {breakpoints[selectedBreakpoint]}
          </Typography>
        </Box>
      </Box>
    </FormControl>
  );
}
