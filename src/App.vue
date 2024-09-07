<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "App", // Optional, but useful for debugging
  props: {},

  setup(props) {
    const isMenuActive = ref(false);

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };

    return {
      isMenuActive,
    };
  },
});
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/"> Scout Events </a>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isMenuActive }"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Events</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>
