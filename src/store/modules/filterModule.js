export const filterModule = {
  state: {
    globalSearch: ""
  },
  mutations: {
    setGlobalSearch(state, payload) {
      state.globalSearch = payload;
    }
  },
  actions: {
    setGlobalSearch({ commit }, value) {
      commit("setGlobalSearch", value);
    }
  },
  getters: {
    getGlobalSearch(state) {
      return state.globalSearch;
    }
  }
};
