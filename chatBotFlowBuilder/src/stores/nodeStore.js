import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const store = (set, get) => ({
  nodes: {},
  setSelectedClass: (node_id, val) => {
    set((state) => {
      state.nodes[node_id] = { selected: val, ...state.nodes[node_id] };
    });
  },
  getSelectedClass: (node_id) => {
    const nds = get().nodes;
    if (!(node_id in nds)) {
      nds[node_id] = { selected: "unselectedClass" };
    }
    return nds[node_id].selected;
  },
});

export default create(store);
