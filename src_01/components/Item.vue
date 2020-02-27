<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)"
  :style= "{backgroundcolor: bgColor}">
    <label>
      <input type="checkbox" v-model= "isCheck">
      <span>{{todo.title}}</span>
    </label>
    <button class= "btn btn-danger" @click= "deleteItem" v-show= "isShow">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    deleteTodo: Function,
    index: Number,
    updateTodo: Function
  },
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    deleteItem () {
      if (confirm('确认删除吗？')) {
      this.deleteTodo(this.index)
      }
    },
    handleEnter (isEnter) {
      if (isEnter) {
        this.isShow = true
        this.bgColor = '#cccccc'
      } else {
        this.isShow = false
        this.bgColor = 'white'
      }
    }
  },
  computed: {
    isCheck: {
      get () {
        return this.todo.complete
      },
      set (value) {
        this.updateTodo(this.todo, value)
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
