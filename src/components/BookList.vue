<template>
  <div>
    <div v-if="!books.length">
      No matches exist
    </div>
    <div v-else class="booklistDemo mx-auto flex flex-wrap  justify-between">
      <Book v-for="book in books" :key="book.isbn" :book="book" />
    </div>
  </div>
</template>

<script>
import Book from "@/components/Book.vue";
export default {
  name: "BookList",
  data() {
    return {};
  },
 
  components: {
    Book
  },
  props: {
    books: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.booklistDemo {
  width: 90%;
  max-width: 960px;
  height: 600px;
  overflow-x: scroll;
  margin-bottom: 50px;
}

.booklistDemo::-webkit-scrollbar {
  display: none;
}
</style>