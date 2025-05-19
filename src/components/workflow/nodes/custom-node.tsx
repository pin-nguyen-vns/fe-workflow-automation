import { Box, Paper, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

interface NodeData {
  icon?: string;
  label?: string;
  description?: string;
}

interface CustomNodeProps {
  data: NodeData;
  isConnectable: boolean;
}

function CustomNode({ data, isConnectable }: CustomNodeProps) {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: 1.5,
        borderRadius: 2,
        width: 200,
        backgroundColor: "background.paper",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={{ background: "#555" }}
      />
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography variant="body2" sx={{ mr: 1 }}>
          {typeof data.icon === "string" ? data.icon : "📦"}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {data.label || "Node"}
        </Typography>
      </Box>
      <Typography variant="caption" color="text.secondary">
        {data.description || "Description"}
      </Typography>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
        style={{ background: "#555" }}
      />
    </Paper>
  );
}

export default memo(CustomNode);
