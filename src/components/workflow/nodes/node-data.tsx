import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import HttpOutlinedIcon from "@mui/icons-material/HttpOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

export const nodeCategories = {
  "Agent Flows": [
    {
      type: "agent",
      label: "Agent",
      description:
        "Dynamically choose and utilize tools during runtime, enabling multi-step reasoning",
      icon: <SmartToyOutlinedIcon fontSize="small" color="primary" />,
    },
    {
      type: "condition",
      label: "Condition",
      description: "Split flows based on if-else conditions",
      icon: <CallSplitOutlinedIcon fontSize="small" color="warning" />,
    },
    {
      type: "conditionAgent",
      label: "Condition Agent",
      description:
        "Utilize an agent to split flows based on dynamic conditions",
      icon: <CallSplitOutlinedIcon fontSize="small" color="warning" />,
    },
    {
      type: "customFunction",
      label: "Custom Function",
      description: "Execute custom function",
      icon: <CodeOutlinedIcon fontSize="small" color="info" />,
    },
    {
      type: "directReply",
      label: "Direct Reply",
      description: "Directly reply to the user with a message",
      icon: <ChatBubbleOutlineOutlinedIcon fontSize="small" color="success" />,
    },
    {
      type: "executeFlow",
      label: "Execute Flow",
      description: "Execute another flow",
      icon: (
        <PlayCircleOutlineOutlinedIcon fontSize="small" color="secondary" />
      ),
    },
    {
      type: "http",
      label: "HTTP",
      description: "Send a HTTP request",
      icon: <HttpOutlinedIcon fontSize="small" color="error" />,
    },
    {
      type: "humanInput",
      label: "Human Input",
      description:
        "Request human input, approval or rejection during execution",
      icon: <PersonOutlineOutlinedIcon fontSize="small" color="primary" />,
    },
    {
      type: "iteration",
      label: "Iteration",
      description:
        "Execute the nodes within the iteration block through N iterations",
      icon: <LoopOutlinedIcon fontSize="small" color="secondary" />,
    },
    {
      type: "llm",
      label: "LLM",
      description:
        "Large language models to analyze user-provided inputs and generate responses",
      icon: <PsychologyOutlinedIcon fontSize="small" color="primary" />,
    },
    {
      type: "loop",
      label: "Loop",
      description: "Loop back to a previous node",
      icon: <RepeatOutlinedIcon fontSize="small" color="warning" />,
    },
  ],
  "Data Operations": [],
  Integrations: [],
};
