import { createTheme } from "@mui/material/styles";

// Common theme settings
const commonSettings = {
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none" as const,
          fontWeight: 500,
          padding: "8px 16px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#2b2b2b",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: "#6b6b6b",
            borderRadius: 8,
            minHeight: 24,
            border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
        },
      },
    },
  },
};

// Light theme
export const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb", // Blue from FlowiseAI
      light: "#60a5fa",
      dark: "#1d4ed8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#10b981", // Green from FlowiseAI
      light: "#34d399",
      dark: "#059669",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#f9fafb",
    },
    text: {
      primary: "#111827",
      secondary: "#4b5563",
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "dark",
    primary: {
      main: "#60a5fa", // Lighter blue for dark mode
      light: "#93c5fd",
      dark: "#2563eb",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#34d399", // Lighter green for dark mode
      light: "#6ee7b7",
      dark: "#10b981",
      contrastText: "#ffffff",
    },
    background: {
      default: "#111827",
      paper: "#1f2937",
    },
    text: {
      primary: "#f9fafb",
      secondary: "#d1d5db",
    },
  },
});
