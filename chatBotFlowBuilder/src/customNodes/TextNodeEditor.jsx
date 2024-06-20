import React, { useCallback, useContext, useEffect, useState } from "react";
import { NodeContext } from "@/contextProviders/NodeContextProvider";
import { DebounceInput } from "react-debounce-input";

const TextNodeEditor = ({ node_id, pos }) => {
  const { nodesData, setNodesData, tempData, setTempData } =
    useContext(NodeContext);
  //   const textInputHandler = useCallback(
  //     (e) => {
  //       setNodesData((nds) => {
  //         nds.set(node_id, { text: e.target.value });
  //       });
  //     },
  //     [node_id]
  //   );
  useEffect(() => {
    tempData.set(node_id, { pos, text: nodesData.get(node_id)?.text });
  }, []);
  const textInputHandler = (e) => {
    setNodesData((nds) => {
      console.log("set called");
      nds.set(node_id, { text: e.target.value });
      return new Map(nds);
    });
    console.log("tempData", tempData);
  };
  return (
    <div>
      <div>{pos}</div>
      <DebounceInput
        element="textarea"
        debounceTimeout={300}
        onChange={textInputHandler}
        value={nodesData.get(node_id)?.text}
        className="w-full rounded-md h-[80px] p-2 text-md font-medium"
      />
    </div>
  );
};

export default TextNodeEditor;
