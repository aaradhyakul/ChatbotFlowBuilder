import React, { useState, useCallback } from "react";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import FlowSheet from "@components/FlowSheet";
import SidePanel from "@components/SidePanel";
import NodeContextProvider from "@/contextProviders/NodeContextProvider";
import AlertsContextProvider from "@/contextProviders/AlertsContextProvider";
import Alerts from "@/components/Alerts";

function App() {
  return (
    <div className="flex  h-screen overflow-hidden">
      <NodeContextProvider>
        <AlertsContextProvider>
          <ReactFlowProvider>
            <Alerts />
            <FlowSheet />
            <SidePanel />
          </ReactFlowProvider>
        </AlertsContextProvider>
      </NodeContextProvider>
    </div>
  );
}

export default App;
