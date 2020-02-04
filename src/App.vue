<template>
  <div id="app">
  <router-view></router-view>
   <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
  name: 'app',
  components:{
   Footer
  },
 
 
}
</script>

<style scoped lang="stylus">
#app
  width 100%
  height 100%
  position relative
</style>
