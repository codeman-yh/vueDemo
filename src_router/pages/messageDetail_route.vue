<template>
 <div>
     <ul>
         <li>ID: {{$route.params.id}}</li>
         <li>TITLE: {{messageDetail.title}}</li>
         <li>CONTENT: {{messageDetail.content}}</li>
     </ul>
 </div>
</template>

<script>
    const messageDetails = [
        {id: 1, title: 'messages001', content: 'this is m1'},
        {id: 2, title: 'messages002', content: 'this is m2'},
        {id: 3, title: 'messages003', content: 'this is m3'}
    ]
 export default {
     data () {
         return {
             messageDetail: {}
         }
     },
     mounted () {
         setTimeout(() => {
             const id = this.$route.params.id * 1
             const detail = messageDetails.find(detail =>
                detail.id === id
             )
             this.messageDetail = detail
         }, 1000)
     },
     watch: {
        $route (value) {
            setTimeout(() => {
             const id = value.params.id * 1
             const detail = messageDetails.find(detail =>
                detail.id === id
             )
             this.messageDetail = detail
            }, 1000)
        }
    }
 }
</script>

<style scoped>

</style>
