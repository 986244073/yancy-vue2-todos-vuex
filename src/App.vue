// 视图模板
<template>
  <div id="app">
    <h1> {{title}}</h1>
    <ul class="todos">
      <li>
        <input v-model="newTodo"
               @keyup.13="$store.commit('set_todo',newTodo)"
               placeholder="快写下您要我记住的事吧"
               autofocus="true"/>
      </li>
      <li v-for="(todo,index) in todos"
          :key="index">
        {{todo}}
        <button @click="$store.commit('del_todo',index)">完成</button>
      </li>
    </ul>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "app",
        data() {
            return {
                title: "vue-todos",
                newTodo: ''
            };
        },
        computed: {
            ...mapGetters(['todos'])
        }
    }

</script>

<style scoped>
</style>
