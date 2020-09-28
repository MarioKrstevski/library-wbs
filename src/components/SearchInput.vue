<template>
  <div>
    <div class="relative mr-6 my-2">
      <input
        type="search"
        class="rounded p-3"
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
      default: "Search "
    }
  }
};
</script>