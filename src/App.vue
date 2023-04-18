<template>
  <div class="container mt-4">
    <div class="row">
      <router-view name="header"></router-view>
      <!--**
          * <router-view>は、<transition>または<keep-alive>内での直接使用が非推奨
          * コンソールで警告が出たため変更
          **  -->
      <!-- <Transition name="fade" mode="out-in">
        <router-view></router-view>
      </Transition> -->
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<script>
  import './assets/animate.css/animate.min.css'
  import './assets/css/style.css'

  export default {
    name: 'App',
    components: {
      // HelloWorld
    },
    data: () => ({
        // test : 'テスト',
      }),
      computed: {
      },
      methods: {
        // testFunc() {
        //   return false;
        // },
        // beforeEnter()   {},
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
.link--active {
  font-size: 20px;
}

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  /* .fade-enter-to {} */
  /* .fade-leave-from {} */
  .fade-leave-active {

    transition: opacity 1s;
  }
  .fade-leave-to {
    opacity: 0;
  }
  /* @keyframes __-in {
    from {}
    to {}
  } */
  
</style>
