import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false,
  }),
  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
    favCount() {
      return this.favs.length;
    },
    totalCount() {
      return this.tasks.length;
    },
  },
  actions: {
    async getTasks() {
      this.loading = true;
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      this.tasks = data;
      this.loading = false;
    },
    async addTask(task) {
      this.tasks.push(task);

      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      const response = await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE",
      });
    },
    async toggleFav(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isFav = !task.isFav;

      const response = await fetch("http://localhost:3000/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
});
