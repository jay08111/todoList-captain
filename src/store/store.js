import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoList: storage.fetch(),
  },
  mutations: {
    addTodo(state, payload) {
      if (payload !== "") {
        const obj = {
          completed: false,
          item: payload,
        };
        localStorage.setItem(payload, JSON.stringify(obj));
        state.todoList.push(obj);
      }
    },
    removeTodo(state, { item, index }) {
      state.todoList.splice(index, 1);
      localStorage.removeItem(item.item);
    },
    clearAll(state) {
      state.todoList = [];
      localStorage.clear();
    },
    toggleClass(state, { todoItem, index }) {
      state.todoList[index].completed = !state.todoList[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
});
