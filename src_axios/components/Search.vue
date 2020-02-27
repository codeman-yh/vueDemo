<template>
  <div class="search">
      <div class="search-block">
        <h3 class="search-text">Search Github Users</h3>
        <input type="text" placeholder="enter the name you search" v-model="searchName">
        <button @click="search">Search</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchName: ''
    }
  },

  methods: {
    search () {
      const searchName = this.searchName.trim()
      if (searchName) {
        this.$bus.$emit('search', searchName)
      }
    }
  }
}
</script>

<style scoped>
    .search {
        height: 180px;
        background-color: #eee;
        border-radius:6px;
    }
    .search-block {
        padding-top: 48px;
        padding-bottom: 48px;
        padding-left: 60px;
    }
    .search-text {
       font-size:24px;
       font-weight: 500;
    }
</style>
