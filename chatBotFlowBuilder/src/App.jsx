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
  const saveFlowHandler = () => {
    localStorage.setItem("flowsheet_nodes", JSON.stringify(nodes));
    localStorage.setItem("flowsheet_edges", JSON.stringify(edges));
    localStorage.setItem("hello", { hello: "hit" });
    console.log("hello");
  };
  const [notificationCSS, setNotificationCSS] = useState("-translate-y-[110%]");
  const [notificationText, setNotificationText] = useState(
    "Saved to LocalStorage"
  );
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="h-[40px]  bg-[#343434] flex-[0_0_auto]">
        <div
          className={`${notificationCSS} h-[50px] w-[100px] left-1/2 -translate-x-1/2 bg-[#343434]`}
        >
          {notificationText}
        </div>
        <div className="">
          <button onClick={() => console.log("hello")}>SaveFlow</button>
        </div>
      </div>
      <div className=" flex-[0_0_auto] text-md flex">
        <HandleContextProvider>
          <NodeContextProvider>
            <ReactFlowProvider>
              <FlowSheet />
              <SidePanel />
            </ReactFlowProvider>
          </NodeContextProvider>
        </HandleContextProvider>
      </div>
    </div>
  );
}

export default App;
