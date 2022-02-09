<template>
  <div>
    <transition-group name="list" tag="ul" class="instruments">
      <li
        v-for="({ item, completed }, index) in storedTodoItems"
        :key="item"
        @click="toggleClass({ item, index })"
      >
        <span :class="{ completed: completed }">{{ item }}</span>
        <button @click="removeTodo({ item, index })">remove</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["removeTodo", "toggleClass"]),
  },
  computed: {
    ...mapGetters(["storedTodoItems"]),
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
