<template>
 <div>
    <h1>Home</h1>
    <ul class= "nav nav-tabs">
       <li><router-link to="/home/new">new</router-link></li>
       <li><router-link to="/home/messages">messages</router-link></li>
    </ul>
    <router-view></router-view>
 </div>
</template>

<script>
 export default {
 }
</script>

<style scoped>

</style>
