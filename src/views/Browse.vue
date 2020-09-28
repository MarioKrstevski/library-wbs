<template>
  <div>
    <Filters @getBooksFiltered="getFilteredBooks" />
    <BookList :books="books" />
  </div>
</template>

<script>
import BookList from "@/components/BookList.vue";
import Filters from "@/components/Filters.vue";
import api from "@/services/fakeApi.js";

export default {
  name: "Browse",
  data() {
    return {
      books: []
    };
  },
  mounted() {
    this.books = api.getBooks();
  },
  methods: {
    getFilteredBooks(filters) {
      this.books = api.getFilteredBooks(filters);
    }
  },
  components: {
    Filters,
    BookList
  }
};
</script>
