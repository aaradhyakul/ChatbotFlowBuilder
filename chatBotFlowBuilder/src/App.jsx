import React, { useState, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import FlowSheet from "@components/FlowSheet";
import SideBar from "@components/SideBar";

function App() {
  return (
    <div className="h-full">
      <div className="h-7 bg-slate-100"></div>

      <FlowSheet />
      <SideBar />
    </div>
  );
}

export default App;
