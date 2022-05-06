import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const exampleModule = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
export default exampleModule;
