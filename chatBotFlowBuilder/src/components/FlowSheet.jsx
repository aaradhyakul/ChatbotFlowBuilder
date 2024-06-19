import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
} from "reactflow";
import useStore from "@/stores/store";
import { useShallow } from "zustand/react/shallow";

// const initialNodes = [
//   {
//     id: "provider-1",
//     type: "input",
//     data: { label: "Node 1" },
//     position: { x: 250, y: 5 },
//   },
//   { id: "provider-2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
//   { id: "provider-3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
//   { id: "provider-4", data: { label: "Node 4" }, position: { x: 400, y: 200 } },
// ];

// const initialEdges = [
//   {
//     id: "provider-e1-2",
//     source: "provider-1",
//     target: "provider-2",
//     animated: true,
//   },
//   { id: "provider-e1-3", source: "provider-1", target: "provider-3" },
// ];
const storeSelector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  onConnect: store.onConnect,
});

function FlowSheet() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    storeSelector
    // useShallow(storeSelector)
  );
  const addNode = () => {
    setNodes((nds) => {
      return [
        ...nds,
        {
          id: "provider-6",
          data: { label: "node 6" },
          position: { x: 500, y: 50 },
        },
      ];
    });
  };
  return (
    <div className="flowsheet-wrapper w-full h-[800px]">
      <button onClick={addNode}>add Node</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      ></ReactFlow>
    </div>
  );
}

export default FlowSheet;
