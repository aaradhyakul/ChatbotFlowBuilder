import React, { useContext, useEffect, useState } from "react";
import NodesPanel from "@components/NodesPanel";
import SettingsPanel from "@components/SettingsPanel";
import { NodeContext } from "@/contextProviders/NodeContextProvider";

function SidePanel() {
  const [isNodesPanel, setIsNodesPanel] = useState(true);
  const { selectedNodes, setSelectedNodes } = useContext(NodeContext);
  useEffect(() => {
    if (selectedNodes.size === 0) {
      setIsNodesPanel(true);
    } else if (selectedNodes.size >= 1) {
      setIsNodesPanel(false);
    }
  }, [selectedNodes]);
  const colors = ["#151515"];
  return (
    <div className="absolute top-0 right-0 min-h-full w-[300px] bg-[#343434] shadow-[-1px_0px_1px_0px_#343434]">
      <div className="font-bold flex justify-center pt-1 mt-1 text-white">
        {isNodesPanel ? "NODES" : "EDITOR"}
      </div>
      {isNodesPanel ? <NodesPanel /> : <SettingsPanel />}
    </div>
  );
}

export default SidePanel;
