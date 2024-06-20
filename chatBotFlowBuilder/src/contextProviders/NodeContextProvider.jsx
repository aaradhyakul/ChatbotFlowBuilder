import React, { createContext, useReducer } from "react";

export const NodeContext = createContext(null);

const reducer = (state, action) => {
  const node_id = action.node_id;
  const val = action.value;
  return {
    ...state,
    [node_id]: val,
  };
};

const NodeContextProvider = ({ children }) => {
  const [nodeClassState, dispatch] = useReducer(reducer, {});

  return (
    <NodeContext.Provider value={{ nodeClassState, dispatch }}>
      {children}
    </NodeContext.Provider>
  );
};

export default NodeContextProvider;
