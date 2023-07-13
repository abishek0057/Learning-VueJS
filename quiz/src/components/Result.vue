<script setup>
const { numberOfCorrectAnswers, quizQuestionLength } = defineProps([
  "numberOfCorrectAnswers",
  "quizQuestionLength",
]);
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="results">
    <p>Your Result</p>
    <h1>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</h1>
    <RouterLink to="/" class="back">Go Back</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.results {
  text-align: center;
  padding: 100px 0;

  p {
    font-size: 25px;
  }

  h1 {
    font-size: 80px;
  }

  .back {
    padding: 5px 10px;
    background-color: coral;
    border-radius: 5px;
    text-decoration: none;
    color: white;
  }
}
</style>
