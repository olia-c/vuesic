<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Vuesic</a>
      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <a
              class="px-2 text-white"
              href="javascript:void(0)"
              @click.prevent="toggleAuthModal"
            >
              Login / Register
            </a>
          </li>
          <li>
            <a class="px-2 text-white" href="javascript:void(0)">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import useAuthStore from "@/stores/auth";
import { mapStores } from "pinia";
export default {
  name: "MainHeader",
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    toggleAuthModal() {
      this.authStore.showModal = !this.authStore.showModal;
    },
  },
};
</script>
