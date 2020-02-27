<template>
  <div class="todo-container">
    <div class="todo-wrap">
    <Header :addTodo= "addTodo"/>
    <List :todos= "todos" :deleteTodo= "deleteTodo" :updateTodo= "updateTodo"/>
    <Footer :todos= "todos" :deleteCompleted= "deleteCompleted" :selectAll= "selectAll"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
export default {
  data () {
      return {
        /* todos: [
           {id: 1, title: 'aaa', complete: false},
           {id: 2, title: 'ccc', complete: true},
           {id: 3, title: 'bbb', complete: false},
           {id: 4, title: 'ooo', complete: false}
          ] */
        todos: JSON.parse(localStorage.getItem('todo_key' || '[]'))
      }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    updateTodo (todo, complete) {
      todo.complete = complete
    },
    deleteCompleted () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAll (isCheck) {
      this.todos.forEach(todo => { todo.complete = isCheck })
    }
  },
  watch: {
    todos: {
      handler: function (val, oldVal) {
      // 保存todo
        localStorage.setItem('todo_key', JSON.stringify(val))
      },
      deep: true
    }
  },
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style scoped>
   .todo-container{
    width: 600px;
    margin:0 auto
  }
  .todo-container .todo-wrap{
    padding:10px;
    border:1px solid #ddd;
    border-radius:5px;
  }
</style>
