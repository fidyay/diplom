"use client";
import hexToRGBA from "@/utils/hexToRGBA";
import { Theme } from "@emotion/react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";

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
  value: string;
  onChange: (val: string) => void;
};

export default function FormSlider({
  label,
  breakpoints,
  sx,
  value,
  onChange,
}: TProps) {
  const breakpointsArray = Object.keys(breakpoints);

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
                  onClick={() => onChange(breakpoint)}
                  active={breakpoint === value}
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
            {value}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 400,
              color: "secondary.main",
            }}
          >
            {breakpoints[value]}
          </Typography>
        </Box>
      </Box>
    </FormControl>
  );
}
