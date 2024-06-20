import React, { createContext, useState } from "react";
export const HandleContext = createContext(null);

const HandleContextProvider = ({ children }) => {
  const [nonZeroHandlesCount, setNonZeroHandlesCount] = useState(0);
  const [nonZeroConnectedHandlesCount, setNonZeroConnectedHandlesCount] =
    useState(0);

  return (
    <HandleContext.Provider
      value={{
        nonZeroHandlesCount,
        nonZeroConnectedHandlesCount,
        setNonZeroHandlesCount,
        setNonZeroConnectedHandlesCount,
      }}
    >
      {children}
    </HandleContext.Provider>
  );
};
export default HandleContextProvider;
