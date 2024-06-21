import React, {
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  useOnViewportChange,
  useReactFlow,
  MiniMap,
} from "reactflow";
import useStore from "@/stores/store";
import TextNode from "@/customNodes/TextNode";
import UnidirectionalEdge from "../customEdges/UnidirectionalEdge";
// import "@/customNodes/textNode.css";

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
  setNodes: store.setNodes,
  setEdges: store.setEdges,
  buildFromNodesAndEdges: store.buildFromNodesAndEdges,
});
const id_map = new Map();
const getId = (nodeType) => {
  if (!id_map.has(nodeType)) {
    id_map.set(nodeType, 1);
  }
  const id_no = id_map.get(nodeType);
  const id = `${nodeType}_${id_no}`;
  id_map.set(nodeType, id_no + 1);
  return `${nodeType}_${Math.floor(Math.random() * 1000000)}`;
  // return id;
};

function FlowSheet() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setNodes,
    buildFromNodesAndEdges,
  } = useStore(storeSelector);
  const addNode = (node) => {
    setNodes([...nodes, node]);
  };
  const nodeTypes = useMemo(() => {
    return {
      customTextNode: TextNode,
    };
  }, []);
  const edgeTypes = useMemo(() => {
    return {
      unidirectionalEdge: UnidirectionalEdge,
    };
  }, []);
  const flowSheetWrapperRef = useRef(null);
  const reactFlowInstance = useReactFlow();
  const onLoad = (_reactFlowInstance) => {
    setReactFlowInstance(_reactFlowInstance);
  };
  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const onDrop = (e) => {
    e.preventDefault();
    const bounds = flowSheetWrapperRef.current.getBoundingClientRect();
    const nodeType = e.dataTransfer.getData("nodetype");
    const position = reactFlowInstance.screenToFlowPosition({
      x: e.clientX,
      y: e.clientY,
    });
    position.x -= 80;
    position.y -= 22;
    const newNode = {
      id: getId(nodeType),
      type: nodeType,
      position,
    };
    addNode(newNode);
  };
  const saveFlowHandler = () => {
    localStorage.setItem("flowsheet_nodes", JSON.stringify(nodes));
    localStorage.setItem("flowsheet_edges", JSON.stringify(edges));
    localStorage.setItem("hello", { hello: "hit" });
    console.log("hello");
  };
  const loadFlowHandler = () => {
    const localStorageNodes = JSON.parse(
      localStorage.getItem("flowsheet_nodes")
    );
    const localStorageEdges = JSON.parse(
      localStorage.getItem("flowsheet_edges")
    );
    if (localStorageNodes && localStorageEdges) {
      buildFromNodesAndEdges(localStorageNodes, localStorageEdges);
    }
  };
  const [notificationCSS, setNotificationCSS] = useState("-translate-y-[110%]");
  const [notificationText, setNotificationText] = useState(
    "Saved to LocalStorage"
  );
  return (
    <div className="h-screen flex flex-1 flex-col">
      <div className="h-[40px] flex items-center gap-2 flex-initial bg-[#FBFBF9] shadow-sm px-2">
        <button
          className="bg-[#4CCD99] font-semibold py-1 px-2 rounded-[3px]"
          onClick={saveFlowHandler}
        >
          Save Flow
        </button>
        <button
          className="bg-[#41C9E2] font-semibold py-1 px-2 rounded-[3px]"
          onClick={loadFlowHandler}
        >
          Load Flow
        </button>
      </div>
      <div className="flex-auto">
        <div
          className="flowsheet-wrapper relative w-full h-full "
          ref={flowSheetWrapperRef}
        >
          <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onLoad={onLoad}
            onDragOver={onDragOver}
            onDrop={onDrop}
            fitView
          >
            <Controls />
            <MiniMap nodeStrokeWidth={3} />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}

export default FlowSheet;
