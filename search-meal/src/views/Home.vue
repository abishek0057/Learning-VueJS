<template>
  <div class="flex flex-col p-8"></div>
</template>

<script setup>
import { onMounted } from "vue";
import axiosClient from "../axiosCient";
import store from "../store";

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
});
</script>
