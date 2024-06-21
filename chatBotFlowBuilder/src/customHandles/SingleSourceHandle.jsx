import { Handle } from "reactflow";
import useStore from "@/stores/store";

const storeSelector = (store) => ({
  sourceHandles: store.sourceHandles,
});
const SingleSourceHandle = ({ position, node_id }) => {
  const { sourceHandles } = useStore(storeSelector);
  const checkValidConnection = () => {
    if ((sourceHandles.get(node_id) || 0) > 0) {
      return false;
    }
    return true;
  };
  return (
    <Handle
      type="source"
      position={position}
      isValidConnection={checkValidConnection}
    />
  );
};

export default SingleSourceHandle;
