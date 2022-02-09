import Vue from "vue";
import Vuex from "vuex";
// import * as mutations from "./mutations";
// import * as getters from "./getters";
import todoApp from "./modules/todoApp";
Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    todoApp,
  },
});
