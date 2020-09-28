<template>
  <div class="filtersDemo mx-auto flex flex-wrap  justify-between">
    <Dropdown
      name="colour"
      :options="['Red', 'Blue']"
      firstItem="Select kalr"
      @selected="markSelected"
    />
    <SearchInput @selected="markSelected" name="name" />
    <button
      class="bg-blue-400 hover:bg-blue-900 text-black font-bold py-2 px-4 rounded"
      @click="filterBooks"
    >
      Search
    </button>
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
      colour: "",
      author: "",
      isbn: "",
      genre: "",
      hasAvailableCopies: true
    };
  },
  methods: {
    markSelected(changes) {
      console.log("val", changes);
      const { value, name } = changes;
      this[name] = value;
      console.log("vales", this.$data);
    },
    filterBooks() {
      this.$emit("getBooksFiltered", { filters: this.$data });
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
  height: 200px;
  border: 1px solid red;
  width: 90%;
  max-width: 960px;
  padding: 20px 40px;
}
</style>
