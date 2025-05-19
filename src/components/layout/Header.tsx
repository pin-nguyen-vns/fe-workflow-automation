"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useTheme as useCustomTheme } from "../theme-provider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";

export function Header() {
  const { isDarkMode, toggleTheme } = useCustomTheme();
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(8px)",
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(17, 24, 39, 0.8)"
            : "rgba(255, 255, 255, 0.8)",
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FlowiseAI
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} href="/workflow">
              Workflows
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit">Documentation</Button>
            <Button color="inherit">GitHub</Button>
            <IconButton onClick={toggleTheme} color="inherit">
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
