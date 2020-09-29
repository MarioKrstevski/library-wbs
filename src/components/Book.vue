<template>
  <!-- book card -->
  <div class="book shadow-lg h-40 rounded p-2 bg-transparent relative">
    <div
      class="text-black text-lg font-medium hover:underline hover:text-gray-300 book-title"
    >
      {{
        book.title.length > 75 ? book.title.slice(0, 75) + "..." : book.title
      }}
    </div>
    <div class="text-gray-200 text-xs inline-block mr-4">
      <span class="text-teal-300">isbn:</span>
      {{ book.isbn }}
    </div>
    <div class="text-gray-200 text-xs inline-block mr-6">
      <span class="text-teal-300">bnb:</span> {{ book.bnb }}
    </div>

    <div class="text-blue-200 font-medium text-sm inline-block">
      {{ book.datePublished }}
    </div>
    <div class="text-gray-200">
      <span class="text-teal-300 text-sm">Authors: </span>
      {{ book.creators.join(", ") }}
    </div>

    <div class="text-gray-200">
      <span class="text-teal-300 text-sm">Contributors: </span>
      {{ book.contributors.join(", ") }}
    </div>
    <button
      class="absolute bottom-0 right-0 rent-button rounded px-4 py-2 bg-white text-red-800 text-sm font-medium uppercase hover:text-red-400 hover:bg-gray-900 focus:outline-none"
    >
      Rent book
    </button>
    <!-- <div>{{ book.name  }}</div> -->
  </div>
</template>

<script>
export default {
  name: "Book",
  computed: {
    isOlderThan7Days() {
      const date = this.book.datePublished;
      const dateObj = new Date(date);
      const time = dateObj.getTime();
      const timeNow = new Date().getTime();
      return timeNow - time < 60 * 60 * 24 * 6 * 1000;
    }
  },
  props: {
    book: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.book {
  width: 32%;
  padding-bottom: 18%;
  margin-bottom: 2%;
  border: 3px solid white;
  // background-color: #96adcfa6;
}
.book:hover {
  background-color: #474d57;
}
.book-title {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  letter-spacing: 0.8px;
}
.rent-button {
  right: 8px;
  bottom: 8px;
}
</style>