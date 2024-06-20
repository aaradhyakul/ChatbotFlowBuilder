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
  const { nodeClassState, dispatch } = useContext(NodeContext);
  useEffect(() => {
    dispatch({ node_id: id, value: "nodeUnselected" });
  }, []);
  // const nodeClassName = useMemo(
  //   () => nodeClassState[id] || "nodeUnselected",
  //   [nodeClassState[id]]
  // );
  const nodeClickHandler = () => {
    if (nodeClassState[id] == "nodeSelected") {
      dispatch({ node_id: id, value: "nodeUnselected", type: "updateClass" });
    } else {
      dispatch({ node_id: id, value: "nodeSelected", type: "updateClass" });
    }
  };

  return (
    <>
      <div
        className={`${nodeClassState[id]} flex flex-col w-40 min-h-11 text-mini  rounded-md overflow-hidden`}
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
