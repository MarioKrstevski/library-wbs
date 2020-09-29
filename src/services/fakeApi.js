import bookMock from "@/mocks/books.json";
import filteredBooksMock from "@/mocks/filteredBooks.json";
const validCodes = ["asdf", "1234"];
export default {
  getBooks: function() {
    return JSON.parse(JSON.stringify(bookMock));
  },
  getFilteredBooks: function() {
    return JSON.parse(JSON.stringify(filteredBooksMock));
  },
  verify: function(code) {
    return validCodes.includes(code) ? "success" : "failed";
  }
};
