import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistedState()]
  ,
  state: {
    todos: [] || sessionStorage.getItem('todos'),
    newTodo: {}
  }, mutations: {
    set_todo(state, newTodo) {
      state.todos.push(newTodo)
      sessionStorage.setItem('todos', state.todos)
    }, del_todo(state, index) {
      state.todos.splice(index, 1)
      sessionStorage.setItem('todos', state.todos)
    }
  },
  // }, actions: {
  //   setTodo({commont}, newTodo) {
  //     localStorage.setItem('todo',)
  //     commont('set_todo', newTodo)
  //   }
  // },
  getters: {
    todos: state => state.todos
  }
})
