"use client";

import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { Box, Paper, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

// Define proper TypeScript props interface
interface AgentNodeProps {
  data: {
    label: string;
    description: string;
  };
  isConnectable: boolean;
}

const AgentNode = ({ data, isConnectable }: AgentNodeProps) => {
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
        <SmartToyOutlinedIcon color="primary" fontSize="small" />
        <Typography variant="subtitle2" sx={{ ml: 1, fontWeight: "bold" }}>
          {data.label}
        </Typography>
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
          Agent Type: GPT-4
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

export default memo(AgentNode);
