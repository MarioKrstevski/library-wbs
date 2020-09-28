<template>
  <!-- book card -->
  <div
    class="book flex-initial md:flex shadow-lg  mx-6 md:mx-auto my-4 max-w-lg md:max-w-2xl h-56"
  >
    <div
      class="w-full flex flex-col justify-between  px-4 py-4 bg-teal-200 rounded-lg"
    >
      <div class="flex items-center">
        <h2 class="text-xl text-gray-800 font-medium mr-auto">
          {{ book.name.slice(0, 20) + "..." }}
        </h2>
        <p
          v-if="this.isOlderThan7Days"
          class="text-black-300 font-semibold tracking-tighter bg-yellow-300 p-1 rounded-md border-black"
        >
          NEW
        </p>
      </div>
      <h2 class="text-base text-gray-900 font-medium mt-2">
        Description:
      </h2>
      <p class="text-sm mttt text-gray-700 mt-4">
        {{ book.description.slice(0, 69) + "..." || "Unfamiliar content" }}
      </p>
      <div class="flex items-center justify-end mt-4 top-auto">
        <span
          v-if="book.stock"
          class="bg-white text-black-800 px-4 py-2 rounded mr-auto"
        >
          Available: {{ book.stock }}
        </span>
        <span v-else class="bg-white text-red-600 px-4 py-2 rounded mr-auto">
          No free copies
        </span>
        <button
          :disabled="!book.stock"
          class=" bg-blue-600 text-gray-200 px-6 py-2 rounded-md "
          :class="{ 'opacity-50 ': !book.stock, 'cursor-default': !book.stock }"
        >
          Rent
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookList",
  data() {
    return {
      books: [{ name: "Cinderella" }]
    };
  },
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
  flex-basis: 32%;
}
.mttt {
  margin-bottom: auto;
}
.book::after {
  content: "";
  flex: auto;
}
.bookDemo {
  display: inline-block;
  height: 80px;
  width: 200px;
  border: 1px solid rgb(240, 0, 228);
  margin: 6px;
}
</style>