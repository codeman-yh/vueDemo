<template>
  <div class= "container">
    <Search/>
    <Main/>
  </div>
</template>

<script>
import Search from './components/Search'
import Main from './components/Main'

export default {
  components: {
    Search,
    Main
  }
}
</script>

<style scoped>
  .container {
    width:1000px;
    margin: 0 auto;
  }
</style>
