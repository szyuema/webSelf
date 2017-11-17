import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    count: 1
  },
  getters: {
    doneTodos: (state, getters) => {
      return state.todos.filter(todo => todo.done);
    },
    count: (state, getters) => {
      return state.count + 1;
    },
    getTodoById: (state, getter) => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  mutations: {
    increment(state, payload) {
      // 变更状态
      state.count += payload.amount;
    }
  }
});

export default store;
