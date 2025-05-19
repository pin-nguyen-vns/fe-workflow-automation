"use client";

import type React from "react";

import { Box } from "@mui/material";
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useRef, useState } from "react";
import CustomNode from "./nodes/custom-node";
import NodeSidebar from "./nodes/node-sidebar";

// Define node types directly in this file to avoid import issues
const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

export default function WorkflowEditor() {
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge(
          { ...params, animated: true, style: { stroke: "#2563eb" } },
          eds
        )
      ),
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      const type =
        event.dataTransfer.getData("application/reactflow") || "custom"; // Default to custom if no type

      let nodeData: { label?: string; description?: string; icon?: string } =
        {};
      try {
        nodeData = JSON.parse(
          event.dataTransfer.getData("application/nodeData") || "{}"
        );
      } catch (error) {
        console.error("Failed to parse node data:", error);
        nodeData = { label: "Node", description: "Description" };
      }

      // Check if the dropped element is valid
      if (!reactFlowBounds || !reactFlowInstance) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode: Node = {
        id: `node-${Date.now()}`,
        type: "custom", // Always use custom type for now
        position,
        data: {
          label: nodeData.label || "Node",
          description: nodeData.description || "Description",
          // Render icon as a string instead of a component to avoid issues
          icon: nodeData.icon || "📦",
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  return (
    <Box sx={{ display: "flex", height: "100%", width: "100%", pt: 8 }}>
      <NodeSidebar />
      <Box
        ref={reactFlowWrapper}
        sx={{
          flex: 1,
          height: "100%",
        }}
      >
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background />
            <Controls />
            <MiniMap />
            <Panel position="top-right">
              <Box sx={{ display: "flex", gap: 1 }}></Box>
            </Panel>
          </ReactFlow>
        </ReactFlowProvider>
      </Box>
    </Box>
  );
}
