import React, { memo } from "react";
import { Handle, Position } from "reactflow";

// const customTextNode = {
//   minWidth: "200px",
// };

function TextNode({ data }) {
  return (
    <>
      <div className="flex flex-col w-40 min-h-11 text-mini  rounded-md overflow-hidden">
        <div className="bg-[#97FEED] flex-initial p-1">Send Message</div>
        <textarea
          readOnly
          className="bg-[#F3F8FF] w-full  flex-auto p-1"
        ></textarea>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </>
  );
}
export default memo(TextNode);
