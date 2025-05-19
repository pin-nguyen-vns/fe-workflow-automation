"use client";

import HttpOutlinedIcon from "@mui/icons-material/HttpOutlined";
import { Box, Chip, Paper, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

// Define proper TypeScript props interface
interface HttpNodeProps {
  data: {
    label: string;
    description: string;
  };
  isConnectable: boolean;
}

const HttpNode = ({ data, isConnectable }: HttpNodeProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: 1.5,
        borderRadius: 2,
        width: 220,
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "error.light",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={{ background: "#ef4444" }}
      />
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <HttpOutlinedIcon color="error" fontSize="small" />
        <Typography variant="subtitle2" sx={{ ml: 1, fontWeight: "bold" }}>
          {data.label}
        </Typography>
        <Chip
          label="GET"
          size="small"
          color="error"
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
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ wordBreak: "break-all" }}
        >
          URL: https://api.example.com/data
        </Typography>
      </Box>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
        style={{ background: "#ef4444" }}
      />
    </Paper>
  );
};

export default memo(HttpNode);
