<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full mb-3"
      placeholder="Search for Ingredients"
    />
    <RouterLink
      v-for="ingredient of computedIngredients"
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      :key="ingredient.id"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterLink } from "vue-router";
import axiosClient from "../axiosCient";
const keyword = ref("");
const ingredients = ref([]);

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(async () => {
  const response = await axiosClient.get("list.php?i=list");
  ingredients.value = response.data.meals;
});
</script>
