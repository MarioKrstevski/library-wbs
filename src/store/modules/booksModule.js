import api from "@/services/api.js";

export const booksModule = {
  state: {
    books: []
  },
  mutations: {
    storeBooks(state, payload) {
      state.books = payload;
    }
  },
  actions: {
    storeBooks({ commit }, value) {
      commit("storeBooks", value);
    },
    async searchByBookAuthor({ commit }, filters) {
      let data = await api.getFilteredBooksByAuthor(filters);
      console.log("ba", data, filters);
      if (data !== "noparam") {
        //store authors
        commit("storeBooks", data);
      }
    },
    async searchByBookName({ commit }, filters) {
      let data = await api.getFilteredBooksByName(filters);
      console.log("bn", data, filters);

      if (data !== "noparam") {
        // store books
        commit("storeBooks", data);
      }
    },
    async getFilteredBooks({ commit }, filters) {
      let data = await api.getFilteredBooksByFilters(filters);
      console.log("bc", data, filters);

      if (data !== "noparam") {
        commit("storeBooks", data);
      }
    },
    async searchByBookContributor({ commit }, filters) {
      let data = await api.getFilteredBooksByContributor(filters);
      console.log("bc", data, filters);

      if (data !== "noparam") {
        // store contributors
        commit("storeBooks", data);
      }
    }
  },
  getters: {
    getBooks(state) {
      return state.books;
    }
  }
};
