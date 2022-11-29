import { defineStore } from 'pinia'
import axios from 'axios'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return { todos: [], name: "" }
  },
  actions: {
    async fetchTodos() {
      const { data } = await axios.get('http://localhost:4000/menu')
      localStorage.setItem('Todo', JSON.stringify(data))
      this.todos = data;
    },

    async deleteTodos(id) {
      await axios.delete('http://localhost:4000/menu/' + id)
      this.fetchTodos();
    },
    async addTodos(name) {
      await axios.post('http://localhost:4000/menu', {
        name
      })
      this.name = ''
      this.fetchTodos()
    }
  },
})