import AgentNode from "./nodes/agent-node";
import ConditionNode from "./nodes/condition-node";
import CustomNode from "./nodes/custom-node";
import HttpNode from "./nodes/http-node";
import LLMNode from "./nodes/llm-node";

// Make sure all node types are properly defined React components
export const nodeTypes = {
  default: CustomNode,
  agent: AgentNode,
  condition: ConditionNode,
  http: HttpNode,
  llm: LLMNode,
  customFunction: CustomNode,
  conditionAgent: CustomNode,
  directReply: CustomNode,
  executeFlow: CustomNode,
  humanInput: CustomNode,
  iteration: CustomNode,
  loop: CustomNode,
};
