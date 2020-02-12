<template>
    <div class="todo-main">
        <Item v-for= "(todo,index) in todos" :key= "index" :todo= "todo"
        :deleteTodo= "deleteTodo" :updateTodo= "updateTodo" :index= "index"/>
    </div>
</template>

<script>
import Item from './Item.vue'
export default {
  props: ['todos', 'deleteTodo', 'updateTodo'],
 components: {
    Item
  }
}
</script>

<style>
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding:0px;
  }
</style>
