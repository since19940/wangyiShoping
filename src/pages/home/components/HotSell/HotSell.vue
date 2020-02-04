<!--  -->
<template>
  <div class="hotSell">
    <div class="hot_top" v-if="categoryHotSellModule">
      <span>{{ categoryHotSellModule.title }}</span>
    </div>
    <ul class="sell_top" v-if="categoryHotSellModule">
      <li class="item">
        <span >{{ categoryHotSellModule.categoryList[0].categoryName }}
          <span class="line"></span>
        </span>
        <img :src="categoryHotSellModule.categoryList[0].picUrl" alt="" />
      </li>
      <li  class="item1">
        <span>{{ categoryHotSellModule.categoryList[1].categoryName }}
          <span class="line"></span>
        </span>
        <img :src="categoryHotSellModule.categoryList[1].picUrl" alt="" />
      </li>
    </ul>
    <ul class="sell_list">
      <li class="sell_item" v-for="(item,index) in spliceHotSell" :key=index>
        <span class="text">{{item.categoryName}}</span>
        <img :src="item.picUrl" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HotSell",
    props: {
      categoryHotSellModule: Object
    },
  computed: {
    spliceHotSell(){
      if(this.categoryHotSellModule){
         return [...new Set(this.categoryHotSellModule.categoryList)].splice(2)
      }
     
    }

  },
  
  };
</script>
<style scoped lang="stylus">
  .hotSell
    margin-top 10px
    .hot_top
      height 40px
      line-height 40px
      background #fff
      padding 0 10px 0 10px
    .sell_top
      background #fff
      display flex
      .item
        width 50% 
        height 100px
        background #F8F3E6
        margin 0 10px 0 10px
        display flex
        align-items center
        justify-content center
        
        .line
          width 35px 
          height 3px
          background #333333
          display block
          margin-left 8px
          margin-top 5px
        img 
          width 100px
          height 100px
      .item1 
        width 50%
        height 100px 
        background #ECEFF6
        margin 0 10px 0 10px
        display flex
        align-items center
        justify-content center
        .line
          width 35px 
          height 3px
          background #333333
          display block
          margin-left 8px
          margin-top 5px
        img 
          width 100px
          height 100px
    .sell_list
      display flex
      flex-wrap wrap
      background #fff
      justify-content space-evenly
      .sell_item
        background #F5F5F5
        margin-top 8px
        margin-bottom 10px
        text-align center
        .text
          font-size 14px
        img 
          width 88px
          height 80px



</style>
