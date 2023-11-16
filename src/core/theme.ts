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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          marginBottom: "10px",
          marginTop: "10px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 0,
        },
      },
    },
  },
});

export default theme;
