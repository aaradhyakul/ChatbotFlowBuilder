import React, { useContext, useState } from "react";
import { Handle } from "reactflow";

const MultiTargetNonZeroHandle = ({ position }) => {
  return <Handle position={position} type="target" />;
};

export default MultiTargetNonZeroHandle;
