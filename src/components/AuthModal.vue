<template>
  <div v-show="showModal" class="fixed z-10 inset-0 overflow-y-auto" id="modal">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="closeModal">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="javascript:void(0)"
                :class="{
                  'bg-blue-600 text-white hover:text-white': tab === 'login',
                }"
                @click.prevent="changeTab('login')"
              >
                Login
              </a>
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                :class="{
                  'bg-blue-600 text-white hover:text-white': tab === 'register',
                }"
                href="javascript:void(0)"
                @click.prevent="changeTab('register')"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <login-form v-if="tab === 'login'" />
          <!-- Registration Form -->
          <register-form v-else-if="tab === 'register'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import useAuthStore from "@/stores/auth";
import { mapWritableState } from "pinia";
export default {
  name: "AuthModal",
  computed: {
    ...mapWritableState(useAuthStore, ["showModal"]),
  },
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      tab: "login",
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    changeTab(newTabName) {
      if (this.tab === newTabName) {
        return;
      }
      this.tab = newTabName;
    },
  },
};
</script>
