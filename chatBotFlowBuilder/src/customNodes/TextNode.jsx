import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react";
import { Handle, Position } from "reactflow";
import { NodeContext } from "@/contextProviders/NodeContextProvider";
import SingleSourceHandle from "@/customHandles/SingleSourceHandle";
import MultiTargetNonZeroHandle from "@/customHandles/MultiTargetNonZeroHandle";

const nodeUnselectedStyle = "border-2 border-black";
const nodeSelectedStyle = "border-2 border-black";

function TextNode({ data, id }) {
  const { selectedNodes, setSelectedNodes, nodesData, tempData } =
    useContext(NodeContext);
  const [overlayCSS, setOverlayCSS] = useState("invisible");
  const [overlayPosCSS, setOverlayPosCSS] = useState("invisible");
  useEffect(() => {
    if (selectedNodes.has(id)) {
      setOverlayCSS("");
    } else {
      setOverlayCSS("invisible");
    }
  }, [selectedNodes]);
  useEffect(() => {
    console.log("NODES DATA ", nodesData);
  }, [nodesData]);

  const nodeClickHandler = () => {
    // if (selectedNodes.has(id)) {
    //   setSelectedNodes((nds) => {
    //     nds.delete(id);
    //     return new Map(nds);
    //   });
    // } else {
    //   setSelectedNodes((nds) => {
    //     nds.set(id, "customTextNode");
    //     return new Map(nds);
    //   });
    // }
    if (!selectedNodes.has(id)) {
      setSelectedNodes((nds) => {
        nds.set(id, "customTextNode");
        return new Map(nds);
      });
    }
  };
  return (
    <>
      <div
        className={`relative flex flex-col w-[160px] h-[65px] text-[7px]  rounded-md overflow-hidden shadow-[1px_1px_3px_0px_#343434]`}
        onClick={nodeClickHandler}
      >
        {/* <div
          className={`${overlayCSS} absolute w-full h-full bg-[#343434] opacity-5 -z-1 `}
        ></div> */}
        <div
          className={`${overlayCSS} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold`}
        >
          {tempData.get(id)?.pos || 1}
        </div>
        <div className="bg-[#97FEED] flex-initial p-1 font-semibold">
          Send Message
        </div>
        <textarea
          readOnly
          value={nodesData.get(id)?.text}
          className="bg-[#F3F8FF] w-full  flex-auto p-1 cursor-pointer text-[10px] font-medium"
        ></textarea>
      </div>
      <Handle type="target" position={Position.Left} />
      {/* <MultiTargetNonZeroHandle position={Position.Left} /> */}
      <SingleSourceHandle position={Position.Right} />
    </>
  );
}
export default TextNode;
