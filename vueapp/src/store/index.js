import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
const store = createStore({
  state() {
    return {
      pages: [],
    };
  },
  actions,
  mutations,
  getters,
});

export default store;
