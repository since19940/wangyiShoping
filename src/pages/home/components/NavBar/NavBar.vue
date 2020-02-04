<!--  -->
<template>
  <div class="navigate">
    <div v-for="(item,index) in navList">
     <a :href="item.schemeUrl"  class="navItem">
      <img :src="item.picUrl" alt="" />
      <span>{{item.text}}</span>
     </a>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  export default {
    name: "NavBar",
    data() {
      return {};
    },
    methods: {
      ...mapActions(["getHomeData"])
    },
    computed: {
     ...mapState(["navList"])
    },
    async mounted() {
      this.getHomeData();
    }
  };
</script>
<style scoped lang="stylus">
  .navigate
    width 100%
    height 165px
    background #F4F4F4
    display flex
    flex-wrap wrap
    justify-content space-between
    padding-bottom 15px
    .navItem
      background #F4F4F4
      display flex
      flex-direction column
      align-items center
      img 
        width 66px
        height 66px
      span 
        font-size 12px  
</style>
