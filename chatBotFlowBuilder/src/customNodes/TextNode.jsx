import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react";
import { Handle, Position } from "reactflow";
import "@/customNodes/TextNode.css";
import { NodeContext } from "@/contextProviders/NodeContextProvider";

const nodeUnselectedStyle = "border-2 border-black";
const nodeSelectedStyle = "border-2 border-black";

function TextNode({ data, id }) {
  const { selectedNodes, setSelectedNodes } = useContext(NodeContext);

  useEffect(() => {
    console.log(selectedNodes);
  }, [selectedNodes]);
  const nodeClassName = useMemo(() => {
    if (selectedNodes.has(id)) {
      return "nodeSelected";
    } else {
      return "nodeUnselected";
    }
  }, [selectedNodes]);

  const nodeClickHandler = () => {
    if (selectedNodes.has(id)) {
      setSelectedNodes((nds) => {
        nds.delete(id);
        return new Set(nds);
      });
    } else {
      setSelectedNodes((nds) => {
        nds.add(id);
        return new Set(nds);
      });
    }
  };

  return (
    <>
      <div
        className={`${nodeClassName} flex flex-col w-40 min-h-11 text-mini  rounded-md overflow-hidden`}
        onClick={nodeClickHandler}
      >
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
export default TextNode;
