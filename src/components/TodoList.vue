<template>
  <div>
    <transition-group name="list" tag="ul" class="instruments">
      <li
        v-for="(item, index) in this.$store.state.todoList"
        :key="item.item"
        @click="toggleClass(item, index)"
      >
        <span :class="{ completed: item.completed }">{{ item.item }}</span>
        <button @click="removeTodo(item, index)">remove</button>
      </li>
    </transition-group>
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
    removeTodo(item, index) {
      this.$store.commit("removeTodo", { item, index });
    },
    toggleClass(todoItem, index) {
      this.$store.commit("toggleClass", { todoItem, index });
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
