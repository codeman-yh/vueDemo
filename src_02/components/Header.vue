<template>
<div class="todo-header">
<input type="text" placeholder="请输入任务名，按下回车键确认"
@keyup.enter= "add" v-model= "task"/>
</div>
</template>

<script>
export default {
  props: {
    addTodo: Function
  },
  data () {
    return {
      task: ''
    }
  },
  methods: {
    add () {
      const task = this.task.trim()
      if (!task) {
        alert('请输入任务')
      } else {
        const todo = {
          id: Date.now(),
          complete: false,
          task
        }
        this.addTodo(todo)
        this.task = ''
      }
    }
  }
}
</script>

<style scoped>
  .todo-header input{
    width: 560px;
    height: 28px;
    font-size:14px;
    border:1px solid #ccc;
    border-radius: 4px;
    padding:4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
