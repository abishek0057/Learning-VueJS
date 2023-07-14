<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="" />
      <h1>Pina Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <div class="loading" v-if="taskStore.loading">loading tasks...</div>

    <div class="task-list" v-if="filter === 'all'">
      <p>
        You have {{ taskStore.totalCount }}
        {{ taskStore.totalCount > 1 ? "tasks" : "task" }} left to do
      </p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>
        You have {{ taskStore.favCount }} favroite
        {{ taskStore.favCount > 1 ? "tasks" : "task" }} left to do
      </p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useTaskStore } from "./store/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";

const taskStore = useTaskStore();
taskStore.getTasks();

const filter = ref("all");
</script>

