"use client";

import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";
import { Box, Paper, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

// Define proper TypeScript props interface
interface ConditionNodeProps {
  data: {
    label: string;
    description: string;
  };
  isConnectable: boolean;
}

const ConditionNode = ({ data, isConnectable }: ConditionNodeProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: 1.5,
        borderRadius: 2,
        width: 220,
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "warning.light",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={{ background: "#f59e0b" }}
      />
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <CallSplitOutlinedIcon color="warning" fontSize="small" />
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
          Condition: if (result.success === true)
        </Typography>
      </Box>
      <Handle
        type="source"
        position={Position.Bottom}
        id="true"
        style={{ background: "#10b981", left: 50 }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="false"
        style={{ background: "#ef4444", left: 170 }}
        isConnectable={isConnectable}
      />
    </Paper>
  );
};

export default memo(ConditionNode);
