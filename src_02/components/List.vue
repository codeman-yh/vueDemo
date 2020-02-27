<template>
  <div class="todo-main">
    <Item v-for="(todo, index) in todos" :key="todo.id" :index="index"
    :todo= "todo" :deleteTodo= "deleteTodo" :updataTodo= "updataTodo"/>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  props: {
    todos: Array,
    deleteTodo: Function,
    updataTodo: Function
  },
  components: {
    Item
  }
}
</script>

<style scoped>
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding:0px;
  }
</style>
