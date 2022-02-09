<template>
  <div>
    <button @click="clearAll">Clear All</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["clearAll"]),
  },
};
</script>

<style scoped></style>
