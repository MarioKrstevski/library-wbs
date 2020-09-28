<template>
  <div>
    <Filters @getBooksFiltered="getFilteredBooks" />
    <BookList :books="books" />
  </div>
</template>

<script>
import BookList from "@/components/BookList.vue";
import Filters from "@/components/Filters.vue";
// import api from "@/services/fakeApi.js";
import api from "@/services/api.js";

export default {
  name: "Browse",
  data() {
    return {
      books: []
    };
  },
  mounted() {
    api.getBooks().then(res => {
      this.books = res.data;
    });
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
