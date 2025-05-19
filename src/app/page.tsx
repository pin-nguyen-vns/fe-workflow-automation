"use client";

import { Header } from "@/components/layout/Header";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            py: 8,
            pt: { xs: 12, sm: 16 },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(45deg, #60a5fa 30%, #34d399 90%)"
                  : "linear-gradient(45deg, #2563eb 30%, #10b981 90%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome to FlowiseAI
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            align="center"
            color="text.secondary"
            sx={{ maxWidth: 800 }}
          >
            Build and deploy AI workflows with ease
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              maxWidth: 600,
              color: "text.secondary",
              fontSize: "1.25rem",
            }}
          >
            Our platform helps you create, manage, and scale your AI automation
            projects with a simple drag-and-drop interface.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
