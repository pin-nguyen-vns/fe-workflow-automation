"use client";

import type React from "react";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Collapse,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

// Define types for node data
interface NodeData {
  type: string;
  label: string;
  description: string;
  icon: string;
}

// Define type for node categories
type NodeCategories = {
  [category: string]: NodeData[];
};

// Simplified node data with string icons instead of React components
const nodeCategories: NodeCategories = {
  "Agent Flows": [
    {
      type: "custom",
      label: "Agent",
      description: "Dynamically choose and utilize tools during runtime",
      icon: "🤖",
    },
    {
      type: "custom",
      label: "Condition",
      description: "Split flows based on if-else conditions",
      icon: "🔀",
    },
    {
      type: "custom",
      label: "HTTP",
      description: "Send a HTTP request",
      icon: "🌐",
    },
    {
      type: "custom",
      label: "LLM",
      description: "Large language models to analyze user-provided inputs",
      icon: "🧠",
    },
  ],
  "Data Operations": [
    {
      type: "custom",
      label: "Transform",
      description: "Transform data between steps",
      icon: "🔄",
    },
  ],
};

export default function NodeSidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {
      "Agent Flows": true,
      "Data Operations": false,
    }
  );

  const handleCategoryToggle = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string,
    nodeData: NodeData
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData(
      "application/nodeData",
      JSON.stringify(nodeData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const filteredCategories = Object.entries(nodeCategories)
    .map(([category, nodes]) => {
      const filteredNodes = nodes.filter(
        (node) =>
          node.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          node.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { category, nodes: filteredNodes };
    })
    .filter(({ nodes }) => nodes.length > 0);

  return (
    <Paper
      elevation={3}
      sx={{
        width: 280,
        height: "100%",
        overflowY: "auto",
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Add Nodes
        </Typography>
        <TextField
          fullWidth
          size="small"
          placeholder="Search nodes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        {filteredCategories.map(({ category, nodes }) => (
          <Box key={category} sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => handleCategoryToggle(category)}
              sx={{ borderRadius: 1, mb: 0.5 }}
            >
              <ListItemText primary={category} />
              {openCategories[category] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={!!openCategories[category]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {nodes.map((node) => (
                  <ListItemButton
                    key={node.label}
                    sx={{ pl: 4, borderRadius: 1 }}
                    onDragStart={(event) => onDragStart(event, node.type, node)}
                    draggable
                  >
                    <Typography sx={{ mr: 1 }}>{node.icon}</Typography>
                    <ListItemText
                      primary={node.label}
                      secondary={node.description}
                      primaryTypographyProps={{ variant: "body2" }}
                      secondaryTypographyProps={{
                        variant: "caption",
                        sx: { fontSize: "0.7rem" },
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
