<template>
  <div ld="id">
    <TodoHeader />
    <TodoInput @addTodo="addOneItem" />
    <TodoList
      :todoItems="todoItems"
      @removeTodo="removeTodo"
      @toggleClass="toggleClass"
    />
    <TodoFooter @clearAll="clearAll" v-if="todoItems.length > 0" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  name: "App",
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  components: {
    TodoList,
    TodoHeader,
    TodoInput,
    TodoFooter,
  },
  methods: {
    addOneItem(newTodo) {
      const obj = { completed: false, item: newTodo };
      localStorage.setItem(newTodo, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    clearAll() {
      this.todoItems = [];
      localStorage.clear();
    },
    removeTodo(item) {
      localStorage.removeItem(item);
      this.todoItems = this.todoItems.filter((todo) => todo !== item);
    },
    toggleClass(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 400px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
