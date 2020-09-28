<template>
  <div>
    <modal name="secretcode"
      >This is an example
      <input :value="code" @input="code = $event.target.value" />
      <button @click="checkValidity" v-show="code" class="inline-block">
        Work
      </button>

      <p v-if="status">
        {{ status }}
      </p>
    </modal>
  </div>
</template>

<script>
import api from "@/services/fakeApi.js";
export default {
  name: "Secret",
  data: function() {
    return {
      status: "",
      code: ""
    };
  },
  methods: {
    checkValidity() {
      const result = api.verify(this.code);

      this.status = result;
      this.code = "";
      const vm = this;
      setTimeout(function() {
        vm.status = "";
        if (result === "failed") {
          vm.$modal.hide("secretcode");
        }
      }, 6000);
    }
  },
  components: {}
};
</script>