import React, { useContext, useState } from "react";
import { Handle } from "reactflow";
import { HandleContext } from "@/contextProviders/HandleContextProvider";

const MultiTargetNonZeroHandle = ({ position }) => {
  const {
    nonZeroHandlesCount,
    nonZeroConnectedHandlesCount,
    setNonZeroHandlesCount,
    setNonZeroConnectedHandlesCount,
  } = useContext(HandleContext);
  const connectionHandler = () => {
    console.log("onCONnect");
  };

  const [targetCount, setTargetCount] = useState(0);
  return (
    <Handle
      position={position}
      type="target"
      onConnect={(e) => {
        console.log("hello");
      }}
    />
  );
};

export default MultiTargetNonZeroHandle;
