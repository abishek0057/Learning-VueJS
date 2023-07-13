<template>
  <div :key="meal.idMeal" class="bg-white shadow rounded-xl">
    <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.srtMeal"
        class="rounded-t-xl h-48 w-full object-cover"
      />
    </RouterLink>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ex? Lorem
        ipsum dolor sit amet.
      </p>
      <div class="py-3">
        <YoutubeButton :href="meal.strYoutube">Goto Youtube</YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps(["meal"]);
</script>
