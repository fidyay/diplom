"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7059FF",
      contrastText: "#fff",
      light: "#BEBDFF",
    },
    secondary: {
      main: "#383541D9",
      light: "#858587",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontWeight: 500,
      fontSize: 28,
    },
  },
});

export default theme;
