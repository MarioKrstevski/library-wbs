/* eslint-disable no-unused-vars */
import axios from "axios";
const API_URL = "http://localhost:8090/";
function concatParams(filterObject) {
  return "paramsSTring";
}
export default {
  getBooks: function () {
    return axios
      .get(API_URL + "books", {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
      .then(res => {
        return res.data;
      });
  },
  getFilteredBooksByName(filters) {
    if (!filters.name) {
      return "noparam";
    }
    return axios
      .get(API_URL + "books/" + filters.name, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
      .then(res => {
        const isArray = Array.isArray(res.data);
        if (isArray) {
          return res.data;
        }
        if (res.data && res.data.isbn) {
          const array = [];
          array[0] = res.data;
          return array;
        }
        return [];
      })
      .catch(() => {
        return [];
      });
  },
  getFilteredBooksByAuthor(filters) {
    if (!filters.author) {
      return "noparam";
    }
    let url = API_URL + "authors/" + filters.author
    if (filters.author === 'all') {
      url = API_URL + 'authors'
    }
    return axios
      .get(url, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
      .then(res => {
        const isArray = Array.isArray(res.data);
        if (isArray) {
          return res.data;
        }
        if (res.data && res.data.type === "Person") {
          const array = [];
          array[0] = res.data;
          return array;
        }
        return [];
      })
      .catch(() => {
        return [];
      });
  },
  getFilteredBooksByContributor(filters) {
    if (!filters.contributor) {
      return "noparam";
    }
    let url = API_URL + "contributors/" + filters.contributor
    if (filters.contributor === 'all') {
      url = API_URL + 'contributors'
    }
    return axios
      .get(url, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
      .then(res => {
        const isArray = Array.isArray(res.data);
        if (isArray) {
          return res.data;
        }
        if (res.data && res.data.type === "Person") {
          const array = [];
          array[0] = res.data;
          return array;
        }
        return [];
      })
      .catch(() => {
        return [];
      });
  },
  getFilteredBooksByFilters() {
    return this.getBooks();
    //     const params = concatParams(filters);
    //     return axios
    //       .get(API_URL + "books/" + params, {
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" }
    //       })
    //       .then(res => {
    //         const isArray = Array.isArray(res.data);
    //         if (isArray) {
    //           return res.data;
    //         }
    //         if (res.data && res.data.isbn) {
    //           const array = [];
    //           array[0] = res.data;
    //           return array;
    //         }
    //         return [];
    //       })
    //       .catch(() => {
    //         return [];
    //       });
  }
};
