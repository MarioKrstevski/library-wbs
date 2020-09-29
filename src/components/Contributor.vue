<template>
  <!-- book card -->
  <div class="contributor shadow-lg h-24 rounded p-2">
    <div class="text-2xl text-white">{{ contributor.name }}</div>
    <div class="text-base text-black font-medium">Contributions:</div>
    <ol class="list-decimal text-red-200 ml-8">
      <li v-for="book in contributor.hasContributed" :key="book">
        {{ book }}
      </li>
    </ol>
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
.contributor {
  width: 48%;
  padding-bottom: 18%;
  margin-bottom: 2%;
  border: 3px solid pink;
  border-top: 8px solid pink;
}
</style>