import React from "react";

function NodesPanel() {
  const onDragStart = (e, nodeType) => {
    e.dataTransfer.setData("nodetype", nodeType);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="flex flex-wrap gap-2 p-2 text-sm">
      <div
        className="flex-auto w-[100px] bg-[#FAF9F6] shadow-sm h-[60px] rounded-md overflow-hidden duration-150 hover:scale-105"
        draggable
        // onDragStart={dragStart}
        onDragStart={(e) => onDragStart(e, "customTextNode")}
        // onDragEnd={dragEnd}
      >
        <button className="w-full h-full  p-1 active:bg-[#FBF9F1] active:outline-2  font-semibold">
          Message Node
        </button>
      </div>
      <div className="flex-auto w-[100px] bg-[#FAF9F6] shadow-sm   h-[60px] rounded-md overflow-hidden duration-150 hover:scale-105">
        <button className="w-full h-full  p-1 active:bg-[#FBF9F1] active:outline-2  font-semibold">
          Node 1
        </button>
      </div>
      <div className="flex-auto w-[100px] bg-[#FAF9F6] shadow-sm  h-[60px] rounded-md overflow-hidden duration-150 hover:scale-105">
        <button className="w-full h-full  p-1 active:bg-[#FBF9F1] active:outline-2  font-semibold">
          Node 2
        </button>
      </div>
      <div className="flex-auto w-[100px] bg-[#FAF9F6] shadow-sm  h-[60px] rounded-md overflow-hidden duration-150 hover:scale-105">
        <button className="w-full h-full  p-1 active:bg-[#FBF9F1] active:outline-2  font-semibold">
          Node 3
        </button>
      </div>
    </div>
  );
}

export default NodesPanel;
