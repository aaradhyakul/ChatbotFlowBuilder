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
  // {
  //   id: "provider-1",
  //   type: "input",
  //   data: { text: "Node 1" },
  //   position: { x: 0, y: 0 },
  // },
  // {
  //   id: "provider-2",
  //   type: "customTextNode",
  //   data: { message: "enter msg to send" },
  //   position: { x: 100, y: 100 },
  // },
  // { id: "provider-3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
  // { id: "provider-4", data: { label: "Node 4" }, position: { x: 400, y: 200 } },
];

const initialEdges = [
  // {
  //   id: "provider-e1-2",
  //   type: "unidirectionalEdge",
  //   markerEnd: { type: MarkerType.ArrowClosed },
  //   source: "provider-1",
  //   target: "provider-2",
  //   // animated: true,
  // },
  // { id: "provider-e1-3", source: "provider-1", target: "provider-3" },
];
//EDGE IS NOT RECONNECTING AFTER CLICKING ON CROSS ????
const edgesChangeHandler = (changes, set, get) => {
  const { source, target } = changes;
  set({ edges: applyEdgeChanges(changes, get().edges) });
};
const connectionHandler = (connection, set, get) => {
  const { source: sourceId, target: targetId } = connection;
  const edge = {
    ...connection,
    type: "unidirectionalEdge",
    id: `${connection.source}|${connection.target}`,
    markerEnd: { type: MarkerType.ArrowClosed },
  };
  // console.log(connection);
  // console.log(connection.source, targetId);
  const edgeId = `${sourceId}|${targetId}`;
  const sourceHandles = get().sourceHandles;
  const targetHandles = get().targetHandles;
  const edgeHandleMap = get().edgeHandleMap;
  sourceHandles.set(sourceId, (sourceHandles.get(sourceId) || 0) + 1);
  targetHandles.set(targetId, (targetHandles.get(targetId) || 0) + 1);
  edgeHandleMap.set(edgeId, [sourceId, targetId]);
  set({
    sourceHandles: new Map(sourceHandles),
    targetHandles: new Map(targetHandles),
    edgeHandleMap: new Map(edgeHandleMap),
    edges: addEdge(edge, get().edges),
  });
  console.log("SourceHandle: ", sourceHandles);
  console.log("TargetHandle: ", targetHandles);
  console.log("EdgeHandleMap: ", edgeHandleMap);
};

const store = (set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  nodeTypes: {},
  edgeTypes: {},
  edgeHandleMap: new Map(), // edge_id-->{handle_id1, handle_id2} | updated by onConnect handler & setEdges
  sourceHandles: new Map(), // handle_id-->connectionCount
  targetHandles: new Map(), // handle_id-->connectionCount

  onNodesChange: (changes) => {
    set({ nodes: applyNodeChanges(changes, get().nodes) });
    // console.log("onNodesChange: ", changes);
  },
  onEdgesChange: (changes) => {
    edgesChangeHandler(changes, set, get);
    // console.log("onEdgesChange", changes);
  },
  onConnect: (connection) => {
    connectionHandler(connection, set, get);
    // console.log("Connection", connection);
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
  setSourceHandles: (sourceHandles) => {
    set({ sourceHandles });
  },
  setTargetHandles: (targetHandles) => {
    set({ targetHandles });
  },
  setEdgeHandleMap: (edgeHandleMap) => {
    set({ edgeHandleMap });
  },
  buildFromNodesAndEdges: (nodes, edges) => {
    const tempEdgeHandleMap = new Map();
    const tempSourceHandlesMap = new Map();
    const tempTargetHandlesMap = new Map();
    for (const edge of edges) {
      const { id, source, target } = edge;
      tempEdgeHandleMap.set(id, [source, target]);
      tempSourceHandlesMap.set(
        source,
        (tempSourceHandlesMap.get(source) || 1) + 1
      );
      tempTargetHandlesMap.set(
        target,
        (tempTargetHandlesMap.get(target) || 1) + 1
      );
    }
    set({
      nodes,
      edges,
      edgeHandleMap: tempEdgeHandleMap,
      sourceHandles: tempSourceHandlesMap,
      targetHandles: tempTargetHandlesMap,
    });
  },
  // removeEdge: (edge_id) => {
  //   set({ ...edges.filter((edge) => edge.id !== edge_id) });
  //   const {handleId1, handleId2} = edges.get(edge_id);

  //   edgeHandleMap.delete(edge_id);
  // },
});

export default create(store);
