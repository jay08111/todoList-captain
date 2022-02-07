<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoItems" :key="item.item">
        <span
          :class="{ completed: item.completed }"
          @click="toggleClass(item, index)"
          >{{ item.item }}</span
        >
        <button @click="removeTodo(item)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
  methods: {
    removeTodo(item) {
      localStorage.removeItem(item);
      this.todoItems = this.todoItems.filter((todo) => todo !== item);
    },
    toggleClass(item) {
      item.completed = !item.completed;
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item));
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
