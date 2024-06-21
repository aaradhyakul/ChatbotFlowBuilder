import React, { useState, useCallback } from "react";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import FlowSheet from "@components/FlowSheet";
import SidePanel from "@components/SidePanel";
import NodeContextProvider from "@/contextProviders/NodeContextProvider";
import HandleContextProvider from "@/contextProviders/HandleContextProvider";
import useStore from "@/stores/store";

const storeSelector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
});

function App() {
  const { nodes, edges } = useStore(storeSelector);
  return (
    <div className="flex  h-screen overflow-hidden">
      <HandleContextProvider>
        <NodeContextProvider>
          <ReactFlowProvider>
            <FlowSheet />
            <SidePanel />
          </ReactFlowProvider>
        </NodeContextProvider>
      </HandleContextProvider>
    </div>
  );
}

export default App;
