<!--  -->
<template>
  <ul class="footer_menu">
    <li class="menu_item">
      <a class="items" @click="skipTo('/home')" :class="{on:$route.path==='/home'}" >
        <i class="icon-shouye iconn" ></i>
        <span class="text">首页</span>
      </a>
    </li>
    <li class="menu_item">
      <a class="items" @click="skipTo('/categories')" :class="{on:$route.path==='/categories'}">
        <i class="icon-icon iconn"></i>
        <span class="text">分类</span>
      </a>
    </li>
    <li class="menu_item">
      <a class="items" @click="skipTo('/find')" :class="{on:$route.path==='/find'}">
        <i class="icon-faxian iconn"></i>
        <span class="text">视图</span>
      </a>
    </li>
    <li class="menu_item">
      <a class="items" @click="skipTo('/cart')" :class="{on:$route.path==='/cart'}">
        <i class="icon-shopcart iconn"></i>
        <span class="text">购物车</span>
      </a>
    </li>
    <li class="menu_item">
      <a class="items" @click="skipTo('/user')" :class="{on:$route.path==='/user'}">
        <i class="icon-tubiaozhizuomoban iconn"></i>
        <span class="text">个人</span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Footer",
    methods:{
      skipTo(path){
        this.$router.replace(path).catch(()=>{})
      }
    }
  };
</script>
<style scoped lang="stylus">
  .footer_menu
    background #ccc
    position absolute
    left 0
    right 0
    bottom 0
    height 50px
    padding 0 15px 0 15px
    display flex
    justify-content space-between
    .menu_item
      .items
        display flex
        flex-direction column
        align-items center
        justify-content center
        width 55px
        height 100%
        &.on
          color #A63533
        .iconn
          font-size 18px
        .text
          font-size 14px
        
</style>
