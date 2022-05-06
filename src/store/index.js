import Vue from "vue";
import Vuex from "vuex";

import exampleModule from "./module-template";
import shop from "./shop";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    example: exampleModule,
    shop: shop,
  },
});
