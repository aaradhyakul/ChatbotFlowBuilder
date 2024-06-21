import React, { useCallback, useContext, useEffect, useState } from "react";
import { NodeContext } from "@/contextProviders/NodeContextProvider";
import { DebounceInput } from "react-debounce-input";
import checked from "@/assets/checked.png";
import cancel from "@/assets/cancel.png";

const TextNodeEditor = ({ node_id, pos }) => {
  const { nodesData, setNodesData, tempData, setTempData, setSelectedNodes } =
    useContext(NodeContext);
  useEffect(() => {
    tempData.set(node_id, { pos, text: nodesData.get(node_id)?.text || "" });
    setTempData((nds) => {
      nds.set(node_id, { pos, text: nodesData.get(node_id)?.text || "" });
      return new Map(nds);
    });
  }, [pos]);
  const textInputHandler = (e) => {
    setNodesData((nds) => {
      // console.log("set called");
      nds.set(node_id, { text: e.target.value });
      return new Map(nds);
    });
    // console.log("tempData", tempData);
  };
  const cancelChangesHandler = () => {
    nodesData.set(node_id, { text: tempData.get(node_id)?.text });
    setSelectedNodes((nds) => {
      nds.delete(node_id);
      return new Map(nds);
    });
  };
  const saveChangesHandler = () => {
    setTempData((nds) => {
      nds.set(node_id, nodesData.get(node_id)?.text);
      return new Map(nds);
    });
    setSelectedNodes((nds) => {
      nds.delete(node_id);
      return new Map(nds);
    });
  };
  return (
    <div className="flex h-[120px] gap-x-[1px] ">
      <div className="flex-initial rounded-l-md w-[50px] p-2 bg-[#FAF9F6] flex flex-col justify-around">
        <div className="flex justify-center text-xl font-bold">{pos}</div>
        <button onClick={cancelChangesHandler}>
          <img src={cancel} alt="Save Changes" width="30" />
        </button>
        <button onClick={saveChangesHandler}>
          <img src={checked} alt="Cancel Changes" width="30" />
        </button>
      </div>
      <DebounceInput
        element="textarea"
        debounceTimeout={300}
        onChange={textInputHandler}
        value={nodesData.get(node_id)?.text}
        className="flex-auto w-full rounded-r-md h-full p-2 text-md font-medium"
      />
    </div>
  );
};

export default TextNodeEditor;
