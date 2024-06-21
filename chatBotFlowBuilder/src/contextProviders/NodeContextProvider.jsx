import React, { createContext, useReducer, useState } from "react";

export const NodeContext = createContext(null);

const NodeContextProvider = ({ children }) => {
  const [selectedNodes, setSelectedNodes] = useState(new Map());
  const [nodesData, setNodesData] = useState(new Map());
  const [tempData, setTempData] = useState(new Map());
  const [nodesCount, setNodesCount] = useState(0);

  return (
    <NodeContext.Provider
      value={{
        selectedNodes,
        setSelectedNodes,
        nodesData,
        setNodesData,
        tempData,
        setTempData,
        setNodesCount,
        nodesCount,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
};

export default NodeContextProvider;
