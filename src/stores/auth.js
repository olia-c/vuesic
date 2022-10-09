// import { ref, computed } from "vue";
import { defineStore } from "pinia";

export default defineStore("auth", {
  state: () => ({
    showModal: false,
  }),
  getters: {
    authModalClass(state) {
      return state.showModal ? "" : "hidden";
    },
  },
});
