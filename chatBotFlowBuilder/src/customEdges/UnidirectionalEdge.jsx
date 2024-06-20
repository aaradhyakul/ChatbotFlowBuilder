import React from "react";
import { BaseEdge, EdgeLabelRenderer, getBezierPath } from "reactflow";

import useStore from "@/stores/store";
import store from "../stores/store";

const storeSelector = (store) => ({
  edges: store.edges,
  setEdges: store.setEdges,
});
const UnidirectionalEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const { edges, setEdges } = useStore(storeSelector);
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const onEdgeClick = () => {
    setEdges(edges.filter((edge) => edge.id !== id));
  };
  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            pointerEvents: "all",
          }}
        >
          <button onClick={onEdgeClick}>x</button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default UnidirectionalEdge;
