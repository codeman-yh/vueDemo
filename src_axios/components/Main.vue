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
export default {
    data () {
        return {
            firstShow: true,
            loading: false,
            users: [],
            errorMsg: ''
        }
    },

    mounted () {
    // 绑定自定义监听
     this.$bus.$on('search', async (searchName) => {
        // 更新状态数据（请求中）
        this.firstShow = false
        this.loading = true
        // 发ajax请求获取users
        const url = `https://api.github.com/search/users?q=${searchName}`
        try {
            const response = await this.$axios(url)
            // 请求成功了，更新数据（成功）
            const users = response.data.items.map(item => ({
                username: item.login,
                url: item.html_url,
                avatar_url: item.avatar_url
            }))
            this.loading = false
            this.users = users
        } catch (error) {
            // 请求失败了，更新数据（失败）
            this.loading = false
            this.errorMsg = error.message
        }
     })
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
