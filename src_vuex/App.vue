<template>
 <div>
   <div>click {{count}} times It is a {{EvenOrOdd}}</div>
   <button @click="add">+</button>
   <button @click="decream">-</button>
   <button @click="ifOddIncream">ifOddIncream</button>
   <button @click="async">async</button>
 </div>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
 export default {
 /*   computed: {
     count () {
       return this.$store.state.count
     },
     EvenOrOdd () {
       return this.$store.getters.EvenOrOdd
     }
   }, */
  computed: {
    ...mapState(['count']),
    ...mapGetters(['EvenOrOdd'])
  },
   /* methods: {
     add () {
       this.$store.dispatch('increment')
     },
     decream () {
       this.$store.commit('DECREMENT')
     },
     ifOddIncream () {
       this.$store.dispatch('ifOddIncrement')
     },
     async () {
       this.$store.dispatch('asyncIncrement')
     }
   } */
  methods: {
   ...mapMutations({
     add: 'INCREMENT',
     decream: 'DECREMENT'
   }),
   ...mapActions({
   ifOddIncream: 'ifOddIncrement',
   async: 'asyncIncrement'
   })
  }
 }
</script>

<style scoped>

</style>
