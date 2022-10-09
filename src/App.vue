<template>
  <main-header />
  <!-- Introduction -->
  <main-banner />
  <!-- Main Content -->
  <song-list />
  <!-- Player -->
  <bottom-player />
  <!-- Auth Modal -->
  <auth-modal />
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import AuthModal from "./components/AuthModal.vue";
import MainBanner from "./components/MainBanner.vue";
import SongList from "./components/SongList.vue";
import BottomPlayer from "./components/BottomPlayer.vue";
export default {
  name: "App",
  components: {
    MainHeader,
    AuthModal,
    MainBanner,
    SongList,
    BottomPlayer,
  },
};
</script>

<style scoped></style>
