<template>
  <div class="todo-container">
    <div class="todo-wrap">
    <Header :addTodo= "addTodo"/>
    <List :todos= "todos" :deleteTodo= "deleteTodo" :updataTodo= "updataTodo"/>
    <Footer :todos= "todos" :selectAll= "selectAll" :deleteCompleted= "deleteCompleted" />
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
    /*   todos: [
        {id: 1, task: 'aaa', complete: false},
        {id: 2, task: 'ccc', complete: true},
        {id: 3, task: 'bbb', complete: false}
      ] */
      todos: JSON.parse(localStorage.getItem('todo_key' || ''))
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    updataTodo (todo, value) {
      todo.complete = value
    },
    selectAll (value) {
      this.todos.forEach(todo => { todo.complete = value })
    },
    deleteCompleted () {
      this.todos = this.todos.filter(todo => !todo.complete)
    }
  },
  watch: {
    todos: {
      handler: function (val, oldVal) {
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
