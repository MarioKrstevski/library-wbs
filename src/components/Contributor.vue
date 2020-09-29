<template>
  <!-- book card -->
  <div
    class="book flex-initial flex-col md:flex shadow-lg  mx-6 md:mx-auto my-4 max-w-lg md:max-w-2xl h-56"
  >
    <p>{{ contributor.name }}</p>
    <p>{{ contributor.type }}</p>
    <p>{{ contributor.hasContributed }}</p>
  </div>
</template>

<script>
export default {
  name: "Contributor",

  props: {
    contributor: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>