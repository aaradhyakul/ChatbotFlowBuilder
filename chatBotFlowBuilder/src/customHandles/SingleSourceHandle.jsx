import { useState } from "react";
import { Handle, Position } from "reactflow";

const SingleSourceHandle = ({ position }) => {
  const [sourceCount, setSourceCount] = useState(0);
  const validConnectionCheck = () => {
    if (sourceCount === 0) {
      setSourceCount((sc) => sc + 1);
      return true;
    }
    return false;
  };
  return (
    <Handle
      type="source"
      position={position}
      isValidConnection={validConnectionCheck}
    />
  );
};

export default SingleSourceHandle;
