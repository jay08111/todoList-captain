<template>
  <div>
    <button @click="clearAll">Clear All</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll() {
      this.$emit("clearAll");
    },
  },
};
</script>

<style scoped></style>
