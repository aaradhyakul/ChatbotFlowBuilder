import React, { useContext, useEffect, useMemo, useState } from "react";
import { NodeContext } from "@/contextProviders/NodeContextProvider";
import TextNode from "@/customNodes/TextNode";
import TextNodeEditor from "@/customNodes/TextNodeEditor";

let idx = 1;
function SettingsPanel() {
  const { selectedNodes, setSelectedNodes } = useContext(NodeContext);
  const nodeEditorTypes = {
    customTextNode: TextNodeEditor,
  };
  const [editorList, setEditorList] = useState([]);
  const addToEditorList = (type, node_id, map) => {
    const EditorComponent = nodeEditorTypes[type];
    setEditorList((list) => [
      ...list,
      <EditorComponent node_id={node_id} key={node_id} pos={idx++} />,
    ]);
  };
  useMemo(() => {
    setEditorList([]);
    idx = 1;
    selectedNodes.forEach(addToEditorList);
  }, [selectedNodes]);
  useEffect(() => {}, [selectedNodes]);

  return <div className="flex flex-col p-2 gap-1 ">{editorList}</div>;
}

export default SettingsPanel;
