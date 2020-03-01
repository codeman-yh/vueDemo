<template>
 <div>
     <ul>
        <li v-for="(m) in messages " :key="m.id">
            <router-link :to="`/home/messages/detail/${m.id}`">{{m.title}}</router-link>
            --<button @click="pushshow(m.id)">push查看</button>
            --<button @click="replaceshow(m.id)">replace查看</button>
        </li>
     </ul>
     <button @click="$router.back()">回退</button>
     <hr>
     <MessageDetail :id="3"/>
     <router-view></router-view>
 </div>
</template>

<script>
import MessageDetail from './messageDetail'
 export default {
     data () {
         return {
             messages: []
         }
     },
     mounted () {
      setTimeout(() => {
          const messages = [
              {id: 1, title: 'messages001'},
              {id: 2, title: 'messages002'},
              {id: 3, title: 'messages003'}
          ]
          this.messages = messages
      }, 1000)
     },
     methods: {
         pushshow (id) {
             this.$router.push(`/home/messages/detail/${id}`)
         },
         replaceshow (id) {
             this.$router.replace(`/home/messages/detail/${id}`)
         }
     },
     components: {
         MessageDetail
     }
 }
</script>

<style scoped>

</style>
