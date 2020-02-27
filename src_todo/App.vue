<template>
  <div class="todo-container">
    <div class="todo-wrap">
    <!--   <Header @addTodo= "addTodo"/> -->
      <Header ref= "header"/>
      <List :todos= "todos" :updateTodo = "updateTodo"/>
      <Footer :todos= "todos" :selectAll= "selectAll"
      :deleteCompleted= "deleteCompleted"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List'
import Footer from './components/Footer.vue'
export default {
  data () {
    return {
      todos: JSON.parse(localStorage.getItem('todo_key') || '[]')
    }
  },
  mounted () {
    this.$refs.header.$on('addTodo', this.addTodo)
    this.$globalEventBus.$on('deleteTodo', this.deleteTodo)
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
    /*
      全选/全不选
    */
    selectAll (isCheck) {
      this.todos.forEach(todo => { todo.complete = isCheck })
    },

    deleteCompleted () {
      this.todos = this.todos.filter(todo => !todo.complete)
    }
  },
  watch: {
    todos: {
       handler: function (val, oldVal) {
         // 保存todos
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
    margin:0 auto;
  }
  .todo-container .todo-wrap{
    padding:10px;
    border:1px solid #ddd;
    border-radius:5px;
  }
</style>
