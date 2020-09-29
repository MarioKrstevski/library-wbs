<template>
  <div>
    <Filters @getBooksFiltered="getFilteredBooks" />
    <BookList :list="globalBooks" />
  </div>
</template>

<script>
import BookList from "@/components/BookList.vue";
import Filters from "@/components/Filters.vue";

export default {
  name: "Browse",
  data() {
    return {
      list: []
    };
  },
  computed: {
    globalBooks() {
      return this.$store.getters.getBooks;
    }
  },
  watch: {
    globalBooks(newBooks) {
      this.books = newBooks;
    }
  },
  methods: {
    async getFilteredBooks(filters) {
      this.$store.dispatch("getFilteredBooks", filters);
    }
  },
  components: {
    Filters,
    BookList
  }
};
</script>
