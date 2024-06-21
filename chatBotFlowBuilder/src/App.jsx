import React, { useState, useCallback } from "react";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import FlowSheet from "@components/FlowSheet";
import SidePanel from "@components/SidePanel";
import NodeContextProvider from "@/contextProviders/NodeContextProvider";
import HandleContextProvider from "@/contextProviders/HandleContextProvider";

function App() {
  const saveFlowHandler = () => {
    localStorage.setItem("flowsheet_nodes", JSON.stringify(nodes));
    localStorage.setItem("flowsheet_edges", JSON.stringify(edges));
    localStorage.setItem("hello", { hello: "hit" });
    console.log("hello");
  };
  return (
    <div className="h-full text-md flex">
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
