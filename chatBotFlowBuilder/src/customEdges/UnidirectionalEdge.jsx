import React from "react";
import { BaseEdge, EdgeLabelRenderer, getBezierPath } from "reactflow";

import useStore from "@/stores/store";
import store from "../stores/store";

const storeSelector = (store) => ({
  edges: store.edges,
  sourceHandles: store.sourceHandles,
  targetHandles: store.targetHandles,
  edgeHandleMap: store.edgeHandleMap,
  setEdges: store.setEdges,
  setEdgeHandleMap: store.setEdgeHandleMap,
  setSourceHandles: store.setSourceHandles,
  setTargetHandles: store.setTargetHandles,
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
  const {
    edges,
    sourceHandles,
    targetHandles,
    edgeHandleMap,
    setEdges,
    setSourceHandles,
    setTargetHandles,
    setEdgeHandleMap,
  } = useStore(storeSelector);
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const onEdgeClick = () => {
    const ids = edgeHandleMap.get(id);
    const sourceId = ids[0];
    const targetId = ids[1];
    sourceHandles.set(sourceId, sourceHandles.get(sourceId) - 1);
    targetHandles.set(targetId, targetHandles.get(targetId) - 1);
    edgeHandleMap.delete(id);
    setSourceHandles(new Map(sourceHandles));
    setTargetHandles(new Map(targetHandles));
    setEdgeHandleMap(new Map(edgeHandleMap));
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
