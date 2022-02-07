<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in todoItems"
        :key="item.item"
        @click="toggleClass(item, index)"
      >
        <span :class="{ completed: item.completed }">{{ item.item }}</span>
        <button @click="removeTodo(item)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todoItems: {
      type: Array,
    },
  },
  methods: {
    removeTodo(item) {
      this.$emit("removeTodo", item);
    },
    toggleClass(todoItem, index) {
      this.$emit("toggleClass", todoItem, index);
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
