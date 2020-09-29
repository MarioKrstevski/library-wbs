<template>
  <div class="bg-gray-900">
    <div class="filtersDemo mx-auto flex">
      <div class="flex flex-col flex-grow">
        <div class="flexd">
          <SearchInput
            @selected="markSelected"
            @do-commit="doCommit"
            name="name"
            placeholder="Search by name"
            action="searchByBookName"
          />
          <SearchInput
            @selected="markSelected"
            @do-commit="doCommit"
            name="author"
            placeholder="Search by author"
            action="searchByBookAuthor"
          />
          <SearchInput
            @selected="markSelected"
            @do-commit="doCommit"
            name="contributor"
            placeholder="Search by contributor"
            action="searchByBookContributor"
          />
        </div>
        <div>
          <Dropdown
            name="year"
            :options="yearRange"
            firstItem="Select Year"
            @selected="markSelected"
            @do-commit="doCommit"
            action="searchByBookYear"
          />
          <Dropdown
            name="orderby"
            :options="['latest', 'oldest']"
            firstItem="Order by"
            default="oldest"
            @selected="markSelected"
            @do-commit="doCommit"
            action="searchByBookOrder"
          />
          <div class="mx-2 my-1 inline-block">
            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-indigo-600"
                v-model="availableOnly"
              /><span class="ml-2 text-white">Available only</span>
            </label>
          </div>
        </div>
      </div>
      <div class="searchButton my-auto">
        <button
          class="bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded"
          @click="filterBooks"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import Dropdown from "@/components/Dropdown.vue";
export default {
  name: "Filters",
  data() {
    return {
      name: "",
      author: "",
      year: "",
      contributor: "",
      orderby: "",
      availableOnly: false
    };
  },
  methods: {
    doCommit(commitName) {
      this.$store.dispatch(commitName, this.$data);
    },
    markSelected(changes) {
      const { value, name } = changes;
      this[name] = value;
    },
    filterBooks() {
      this.$emit("getBooksFiltered", this.$data);
    }
  },
  computed: {
    yearRange() {
      let range = ["all"];
      for (let i = 1950; i < 2020; i++) {
        range.push(i.toString());
      }
      return range;
    }
  },
  components: {
    Dropdown,
    SearchInput
  }
};
</script>

<style scoped>
.filtersDemo {
  height: fit-content;
  width: 90%;
  max-width: 1060px;
  padding: 20px 10px 40px 20px;
}
</style>
