<template>
  <nav class="flex items-center align-center justify-between bg-gray-800 p-6">
    <router-link class="mr-4" to="/">
      <div class="flex items-center flex-shrink-0 text-white mr-6 w-full">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span
          class="logotitle font-semibold text-xl tracking-tight w-full flex-grow"
        >
          <span @contextmenu.prevent="rclickHandler($event)">T</span>he British
          Library</span
        >
      </div>
    </router-link>
    <div class="w-full flex-grow flex items-center w-auto">
      <div class="pt-2 relative mx-auto inline-block mr-4">
        <input
          class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm text-black placeholder-black focus:outline-none"
          type="search"
          name="search"
          placeholder="Quick search"
          @input="updateGlobalFilter"
        />
        <button
          type="submit"
          @click="filterGlobally"
          class="absolute right-0 top-0 mt-5 mr-4"
        >
          <svg
            class="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background:new 0 0 56.966 56.966;"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>
      <router-link class="mr-4 text-white hover:text-teal-300" to="/"
        >Home</router-link
      >
      <router-link class="text-white hover:text-teal-300" to="/browse"
        >Browse</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    rclickHandler() {
      this.$modal.show("secretcode");
    },
    async filterGlobally() {
      let search = this.$store.getters.getGlobalSearch;
      this.$store.dispatch("searchByBookName", { name: search });
    },
    updateGlobalFilter(event) {
      this.$store.dispatch("setGlobalSearch", event.target.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.logotitle {
  width: 300px;
}
</style>
