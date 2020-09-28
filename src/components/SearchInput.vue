<template>
  <div class="flex-grow">
    <div class="relative m-2">
      <input
        type="search"
        class="rounded p-3 w-full placeholder-black"
        :placeholder="placeholder"
        :value="text"
        :name="name"
        @input="$emit('selected', { value: $event.target.value, name })"
      />
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
    }
  }
};
</script>
<style scoped>
.w-90 {
  width: 90%;
}
</style>