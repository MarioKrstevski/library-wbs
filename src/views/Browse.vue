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
  async mounted() {
    try {
      let data = await api.getBooks();
      this.books = data;
    } catch (err) {
      console.log(err);
    }
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
