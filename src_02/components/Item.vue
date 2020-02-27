<template>
  <li>
    <label>
      <input type="checkbox" v-model= "isCheck">
      <span>{{todo.task}}</span>
    </label>
    <button class= "btn btn-danger" @click= "deleteItem">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number,
    deleteTodo: Function,
    updataTodo: Function
  },
  methods: {
    deleteItem (index) {
      if (confirm('确定要删除吗？')) {
        this.deleteTodo(index)
      }
    }
  },
  computed: {
    isCheck: {
      get () {
        return this.todo.complete
      },
      set (value) {
        this.updataTodo(this.todo, value)
      }
    }
  }
}
</script>

<style scoped>
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom:1px solid #ddd;
  }
  li label{
    float: left;
    cursor: pointer;
  }
  li label input{
    vertical-align: middle;
    margin-right:6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
</style>
