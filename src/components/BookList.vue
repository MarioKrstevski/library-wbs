<template>
  <div>
    <div v-if="!list.length">
      No matches exist
    </div>
    <div v-else>
      <div
        v-if="isBooks(list[0])"
        class="flex flex-wrap justify-between px-8 py-2 bg-gray-700"
      >
        <Book
          v-for="(book, indx) in list"
          :key="book.isbn + indx"
          :book="book"
        />
      </div>
      <div
        v-else-if="isContributors(list[0])"
        class="flex flex-wrap justify-between px-8 py-2 bg-red-800"
      >
        <Contributor
          v-for="contributor in list"
          :key="contributor.name"
          :contributor="contributor"
        />
      </div>
      <div
        v-else-if="isAuthors(list[0])"
        class="flex flex-wrap justify-between px-8 py-2 bg-blue-800"
      >
        <Author v-for="author in list" :key="author.name" :author="author" />
      </div>
    </div>
  </div>
</template>

<script>
import Book from "@/components/Book.vue";
import Contributor from "@/components/Contributor.vue";
import Author from "@/components/Author.vue";
export default {
  name: "BookList",
  components: {
    Book,
    Author,
    Contributor
  },
  methods: {
    isObject(value) {
      return typeof value === "object" && value !== null;
    },
    isAuthors(item) {
      return this.isObject(item) && item.type === "Person" && item.hasCreated;
    },
    isContributors(item) {
      return (
        this.isObject(item) && item.type === "Person" && item.hasContributed
      );
    },
    isBooks(item) {
      return this.isObject(item) && item.isbn;
    }
  },
  props: {
    list: {
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