<script setup>
import q from "../assets/data/quizes.json";
import { ref, watch } from "vue";
import Card from "../components/Card.vue";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLocaleLowerCase())
  );
});
</script>
<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="search..." />
    </header>
    <div class="option-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;

    h1 {
      font-weight: bold;
      margin-right: 30px;
    }

    input {
      border: none;
      background-color: rgba(128, 128, 128, 0.1);
      padding: 10px;
      border-radius: 5px;
    }
  }

  .option-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
</style>
