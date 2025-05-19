"use client";

import { Box } from "@mui/material";
import dynamic from "next/dynamic";

// Use dynamic import with SSR disabled to avoid hydration issues
const WorkflowEditor = dynamic(
  () => import("@/components/workflow/workflow-editor"),
  {
    ssr: false,
  }
);

export default function WorkflowPage() {
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <WorkflowEditor />
    </Box>
  );
}
