<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)"
  :style= "{backgroundcolor:bgColor}">
    <label>
      <input type= "checkbox" v-model="isCheck">
      <span>{{todo.title}}</span>
    </label>
    <button class= "btn btn-danger" v-show="isShow" @click= "deleteItem">删除</button>
  </li>
</template>

<script>
/*
  模板中读取数据的来源:
    data: 自身可变数据
    props: 外部传入的可弯数据
    computed: 基于已有数据的计算属性
*/
export default {
  props: {
    'todo': Object,
    'deleteTodo': Function,
    'index': Number,
    'updateTodo': Function
  },
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = '#cccccc'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deleteItem () {
      if (confirm('确定删除吗')) {
      this.deleteTodo(this.index)
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

<style>
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
