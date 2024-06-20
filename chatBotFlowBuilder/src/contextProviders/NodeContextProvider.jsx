import React, { createContext, useReducer, useState } from "react";

export const NodeContext = createContext(null);

const NodeContextProvider = ({ children }) => {
  const [selectedNodes, setSelectedNodes] = useState(new Set());
  return (
    <NodeContext.Provider
      value={{ nodeClassState, dispatch, selectedNodes, setSelectedNodes }}
    >
      {children}
    </NodeContext.Provider>
  );
};

export default NodeContextProvider;
