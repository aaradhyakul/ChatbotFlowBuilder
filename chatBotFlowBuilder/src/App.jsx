import React, { useState, useCallback } from "react";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import FlowSheet from "@components/FlowSheet";
import SideBar from "@components/SidePanel";
import NodeContextProvider from "@/contextProviders/NodeContextProvider";

function App() {
  return (
    <div className="h-full text-md">
      <NodeContextProvider>
        <ReactFlowProvider>
          <FlowSheet />
          <SideBar />
        </ReactFlowProvider>
      </NodeContextProvider>
    </div>
  );
}

export default App;
