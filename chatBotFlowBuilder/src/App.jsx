import React, { useState, useCallback } from "react";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import FlowSheet from "@components/FlowSheet";
import SidePanel from "@components/SidePanel";
import NodeContextProvider from "@/contextProviders/NodeContextProvider";

function App() {
  return (
    <div className="flex  h-screen overflow-hidden">
      <NodeContextProvider>
        <ReactFlowProvider>
          <FlowSheet />
          <SidePanel />
        </ReactFlowProvider>
      </NodeContextProvider>
    </div>
  );
}

export default App;
