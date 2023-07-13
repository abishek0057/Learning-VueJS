<template>
  <div class="flex gap-2 justify-center mt-2">
    <RouterLink
      v-for="letter of letters"
      :to="{ name: 'byLetter', params: { letter } }"
      :key="letter"
      class="hover:bg-red-400 p-[3px] rounded transition-colors"
    >
      {{ letter }}
    </RouterLink>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";
const route = useRoute();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const meals = computed(() => store.state.mealsByletter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
