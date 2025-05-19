"use client";

import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import { Box, Chip, Paper, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

// Define proper TypeScript props interface
interface LLMNodeProps {
  data: {
    label: string;
    description: string;
  };
  isConnectable: boolean;
}

const LLMNode = ({ data, isConnectable }: LLMNodeProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: 1.5,
        borderRadius: 2,
        width: 220,
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "primary.light",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={{ background: "#2563eb" }}
      />
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <PsychologyOutlinedIcon color="primary" fontSize="small" />
        <Typography variant="subtitle2" sx={{ ml: 1, fontWeight: "bold" }}>
          {data.label}
        </Typography>
        <Chip
          label="GPT-4"
          size="small"
          color="primary"
          variant="outlined"
          sx={{ ml: "auto", height: 20, fontSize: "0.6rem" }}
        />
      </Box>
      <Typography variant="caption" color="text.secondary">
        {data.description}
      </Typography>
      <Box
        sx={{
          mt: 1.5,
          pt: 1.5,
          borderTop: "1px dashed",
          borderColor: "divider",
        }}
      >
        <Typography variant="caption" color="text.secondary">
          System: You are a helpful assistant
        </Typography>
      </Box>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
        style={{ background: "#2563eb" }}
      />
    </Paper>
  );
};

export default memo(LLMNode);
