<template>
  <div>
    <router-view></router-view>
    <p class="bg-primary">{{ test }}</p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data: () => ({
      test : 'テスト',
    }),
    computed: {
    },
    methods: {
      // testFunc() {
      //   return false;
      // },
      // beforeEnter(el)   {},
      // enter(el, done)   {},
      // afterEnter()    {},
      // enterCancelled(){},
      // beforeLeave()   {},
      // leave(el, done)         {},
      // afterLeave()    {},
      // leaveCancelled(){},
    },
  }
</script>

<style scoped>


  /* 
  .__-enter-from {}
  .__-enter-active {}
  .__-enter-to {}
  .__-leave-from {}
  .__-leave-active {}
  .__-leave-to {}
  @keyframes __-in {
    from {}
    to {}
  }
   */
</style>
