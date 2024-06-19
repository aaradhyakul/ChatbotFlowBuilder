import React from "react";

function NodesPanel() {
  return (
    <div className="flex flex-wrap gap-2 p-2 ">
      <div className="flex-auto w-[100px] bg-[#CDE8E5] h-[80px] rounded-md overflow-hidden duration-150 hover:scale-105">
        <button className="w-full h-full  p-1 active:bg-[#7AB2B2]">
          Message Node
        </button>
      </div>
      <div className="flex-auto w-[100px] bg-[#CDE8E5] h-[80px] rounded-md overflow-hidden duration-150 hover:scale-105">
        <button className="w-full h-full  p-1 active:bg-[#7AB2B2]">
          {" "}
          Node 1
        </button>
      </div>
      <div className="flex-auto w-[100px] bg-[#CDE8E5] h-[80px] rounded-md overflow-hidden duration-150 hover:scale-105">
        <button className="w-full h-full  p-1 active:bg-[#7AB2B2]">
          Node 2
        </button>
      </div>
      <div className="flex-auto w-[100px] bg-[#CDE8E5] h-[80px] rounded-md overflow-hidden duration-150 hover:scale-105">
        <button className="w-full h-full  p-1 active:bg-[#7AB2B2]">
          Node 3
        </button>
      </div>
    </div>
  );
}

export default NodesPanel;
