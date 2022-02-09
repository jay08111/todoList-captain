const addTodo = (state, payload) => {
  if (payload !== "") {
    const obj = { item: payload, completed: false };
    localStorage.setItem(payload, JSON.stringify(obj));
    state.todoList.push(obj);
  }
};

const removeTodo = (state, { item, index }) => {
  state.todoList.splice(index, 1);
  localStorage.removeItem(item.item);
};

const clearAll = (state) => {
  state.todoList = [];
  localStorage.clear();
};

const toggleClass = (state, { todoItem, index }) => {
  state.todoList[index].completed = !state.todoList[index].completed;
  localStorage.removeItem(todoItem.item);
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};

export { addTodo, removeTodo, clearAll, toggleClass };
