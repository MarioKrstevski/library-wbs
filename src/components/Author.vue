<template>
  <!-- book card -->
  <div class="author shadow-lg h-24 rounded p-2">
    <div class="text-2xl text-white">{{ author.name }}</div>
    <div class="text-base text-gray-900 my-2 font-medium">Books:</div>
    <ol class="list-decimal text-teal-200 ml-8">
      <li v-for="book in author.hasCreated" :key="book">
        {{ bookPrintName(book) }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Author",
  methods: {
    bookPrintName(book) {
      if (book.includes("/")) {
        console.log("book", book);
        const indexofdash = book.indexOf("/");
        return book.slice(0, indexofdash);
      }
      return book;
    }
  },
  props: {
    author: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.author {
  width: 48%;
  padding-bottom: 18%;
  margin-bottom: 2%;
  border: 3px solid cyan;
  border-top: 8px solid cyan;
}
</style>