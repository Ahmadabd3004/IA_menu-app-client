<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  computed: {
    ...mapState(useCounterStore, ["todos"]),
    ...mapWritableState(useCounterStore,["name"])
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchTodos"]),
    ...mapActions(useCounterStore, ["deleteTodos"]),
    ...mapActions(useCounterStore, ["addTodos"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<template>
  <div class="container">
    <div class="">
      <div class="add">
        <input type="text" placeholder="Tambahkan Menu" v-model="name" />
        <div class="btn-add" @click="() => addTodos(name)">
          <h1>Add</h1>
        </div>
      </div>
    </div>
    <div class="card">
      <h1 class="title">Menu List</h1>
      <div v-for="todo in todos">
        <div class="todo-item">
          <p>{{ todo.name }}</p>
          <h3 class="delete-text" @click="() => deleteTodos(todo.id)">
            DELETE
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

h1,
h2,
h3,
h4,
h5,
h6,
p,
input {
  font-family: "Poppins", sans-serif;
}
.container {
  height: 100vh;
  width: 100vw;
  background-color: #f49d1a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.add {
  width: 400px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.add input {
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  padding-left: 20px;
  background-color: #ffe15d;
}

.btn-add {
  width: 80px;
  height: 40px;
  background-color: #ff884b;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.btn-add h1 {
  font-size: 15px;
}
.add input:focus {
  outline: none;
}

.card {
  width: 400px;
  height: 500px;
  background-color: #ffe15d;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-bottom: 20px;
}

.todo-item {
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.delete-text {
  cursor: pointer;
  color: #dc3535;
}
</style>
