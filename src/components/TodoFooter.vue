<template>
  <div>
    <button @click="clearAll">Clear All</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll() {
      this.$store.commit("clearAll");
    },
  },
};
</script>

<style scoped></style>
