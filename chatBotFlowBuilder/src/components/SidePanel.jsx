import React, { useState } from "react";
import NodesPanel from "@components/NodesPanel";
import SettingsPanel from "@components/SettingsPanel";

function SidePanel() {
  const [isNodesPanel, setIsNodesPanel] = useState(true);
  return (
    <div className="absolute top-0 right-0 min-h-full max-w-[250px] bg-[#EEF7FF]">
      {isNodesPanel ? <NodesPanel /> : <SettingsPanel />}
    </div>
  );
}

export default SidePanel;
