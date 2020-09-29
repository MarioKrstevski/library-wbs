<template>
  <div class="flex-grow">
    <div class="relative m-2 flex">
      <input
        type="search"
        class="rounded p-3 w-full placeholder-black inline-block"
        :placeholder="placeholder"
        :value="text"
        :name="name"
        :id="name"
        autocomplete="on"
        @input="$emit('selected', { value: $event.target.value, name })"
      />
      <button
        @click="$emit('do-commit', action)"
        class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-1 ml-1 px-2 inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentcolor"
            d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      text: ""
    };
  },
  mounted() {
    this.text = this.defaultValue;
  },
  props: {
    name: {
      type: String
    },
    defaultValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Search"
    },
    action: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped>
.w-90 {
  width: 90%;
}
</style>