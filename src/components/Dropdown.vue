<template>
  <div class="relative inline-flex my-1 mx-2">
    <svg
      class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 412 232"
    >
      <path
        d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
        fill="#648299"
        fill-rule="nonzero"
      />
    </svg>
    <select
      v-model="selectedValue"
      class="border border-gray-300 rounded text-gray-60 placeholder-black 0 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
    >
      <option value="0">{{ firstItem }}</option>
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Dropdown",
  data() {
    return {
      selectedValue: this.default
    };
  },
  watch: {
    selectedValue: function(newVal) {
      this.$emit("selected", {
        value: newVal !== "0" ? newVal : "",
        name: this.name
      });
    }
  },
  created() {
    this.selectedValue = this.default;
  },
  props: {
    options: {
      type: Array,
      default: function() {
        return [String];
      }
    },
    name: {
      type: String,
      default: ""
    },
    default: {
      type: String,
      default: "0"
    },
    firstItem: {
      type: String,
      default: "Select"
    }
  }
};
</script>