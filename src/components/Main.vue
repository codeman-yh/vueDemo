<template>
  <div>
    <div class="main">
      <h1 v-if="firstShow">请输入关键字进行搜索</h1>
      <h1 v-else-if="loading">请求中...</h1>
      <h1 v-else-if="errorMsg">{{errorMsg}}</h1>
        <div class="display" v-else v-for="user in users" :key="user.username">
            <a :href="user.url">
                <img :src="user.avatar_url" alt="xxx" style='width: 100px'>
            </a>
            <p class="display-text">{{user.username}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['firstShow', 'loading', 'users', 'errorMsg'])
    }
}
</script>

<style scoped>
    .main {
        margin-top:20px;
    }
    .display {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }
    .display > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }
    .display-text {
        font-size: 85%;
    }
</style>
