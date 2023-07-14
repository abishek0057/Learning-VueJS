<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to..." v-model="newTask" required />
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store/TaskStore";
import { nanoid } from "nanoid";

const taskStore = useTaskStore();
const newTask = ref("");

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: nanoid(),
    });
  }
  newTask.value = "";
};
</script>
