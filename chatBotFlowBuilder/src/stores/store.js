import { create } from "zustand";
import {
  MarkerType,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
// const initialNodes = [];
// const initialEdges = [];
const initialNodes = [
  {
    id: "provider-1",
    type: "input",
    data: { text: "Node 1" },
    position: { x: 0, y: 0 },
  },
  {
    id: "provider-2",
    type: "customTextNode",
    data: { message: "enter msg to send" },
    position: { x: 100, y: 100 },
  },
  { id: "provider-3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
  { id: "provider-4", data: { label: "Node 4" }, position: { x: 400, y: 200 } },
];

const initialEdges = [
  {
    id: "provider-e1-2",
    type: "unidirectionalEdge",
    markerEnd: { type: MarkerType.ArrowClosed },
    source: "provider-1",
    target: "provider-2",
    // animated: true,
  },
  { id: "provider-e1-3", source: "provider-1", target: "provider-3" },
];
//EDGE IS NOT RECONNECTING AFTER CLICKING ON CROSS ????

const store = (set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,

  onNodesChange: (changes) => {
    set({ nodes: applyNodeChanges(changes, get().nodes) });
  },
  onEdgesChange: (changes) => {
    set({ edges: applyEdgeChanges(changes, get().edges) });
  },
  onConnect: (connection) => {
    const edge = {
      ...connection,
      type: "unidirectionalEdge",
      markerEnd: { type: MarkerType.ArrowClosed },
    };
    set({ edges: addEdge(edge, get().edges) });
    console.log(connection);
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
});

export default create(store);
