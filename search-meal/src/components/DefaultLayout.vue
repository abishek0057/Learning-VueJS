<template>
  <div class="bg-gray-100 h-full">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
</script>

<style lang="scss" scoped></style>
