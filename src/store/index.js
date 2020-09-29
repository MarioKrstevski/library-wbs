import Vue from "vue";
import Vuex from "vuex";

import { filterModule } from './modules/filterModule.js'
import { booksModule } from './modules/booksModule.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    filterModule,
    booksModule
  }
});
