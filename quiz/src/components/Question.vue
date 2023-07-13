<script setup>
import { ref } from "vue";

const showAnswer = ref(false);
const { question } = defineProps(["question"]);

const emit = defineEmits(["selectOption"]);

const emitSelectedOPtion = (isCorrect) => {
  showAnswer.value = true;
  setTimeout(() => {
    emit("selectOption", isCorrect);
    showAnswer.value = false;
  }, 1000);
};
</script>

<template>
  <div class="question-container">
    <h1>{{ question.text }}</h1>
  </div>
  <div class="option-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      :class="[
        'option',
        {
          correct: option.isCorrect && showAnswer,
          wrong: !option.isCorrect && showAnswer,
        },
      ]"
      @click="emitSelectedOPtion(option.isCorrect)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question-container {
  margin-top: 20px;
}

.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 5px;
}
.option-label {
  background-color: bisque;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  background-color: rgb(244, 239, 239);
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.correct {
  border: 5px solid green;
}

.wrong {
  border: 5px solid red;
}
</style>
