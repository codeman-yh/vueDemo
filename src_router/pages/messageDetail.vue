<template>
 <div>
     <ul>
         <li>ID: {{id}}</li>
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
     props: {
         id: Number
     },
     mounted () {
         setTimeout(() => {
             const id = this.id
             const detail = messageDetails.find(detail =>
                detail.id === id
             )
             this.messageDetail = detail
         }, 1000)
     },
     watch: {
        id (value) {
            setTimeout(() => {
             const detail = messageDetails.find(detail =>
                detail.id === value
             )
             this.messageDetail = detail
            }, 1000)
        }
    }
 }
</script>

<style scoped>

</style>
