<template>
  <div>
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" />
    <button @click="addTodo">add</button>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">warning! <span @click="showModal = false">x</span></h3>
      <div slot="body">아무것도 입력하지 않으셨습니다 .</div>
      <div slot="footer">footer</div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
export default {
  data() {
    return {
      showModal: false,
      newTodo: "",
    };
  },
  components: {
    Modal,
  },
  methods: {
    addTodo() {
      if (this.newTodo !== "") {
        this.$store.commit("addTodo", this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>

<style scoped></style>
