<!--  -->
<template>
  <div class="hot">
    <div class="hot_header">
      <span>人气推荐</span>
      <span
        >更多
        <van-icon name="arrow" />
      </span>
    </div>
    <div class="hot_main">
      <div class="recommend" v-if="popularItemList">
        <a :href="popularItemList[0]">
          <img :src="popularItemList[0].scenePicUrl" alt="" />
        </a>
        <div class="content">
          <span class="app">app特惠</span>
          <span class="name">{{ popularItemList[0].name }}</span>
          <span class="desc">{{ popularItemList[0].simpleDesc }}</span>
          <span class="price">¥{{ popularItemList[0].counterPrice }}</span>
        </div>
      </div>
      <div class="recList">
        <div class="recItem" v-for="(item,index) in popularItem" :key=index >
          <img :src="item.scenePicUrl" alt="">
          <div class="text">
            <span class="itemName">{{item.name}}</span>
            <span class="itemPrice" >¥{{item.counterPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Icon } from "vant";
  export default {
    name: "Recommend",
    data() {
      return {};
    },
    props: {
      popularItemList: Array
    },
    components: {
      [Icon.name]: Icon
    },
    computed: {
      popularItem() {
       /*   return [...this.popularItemList].splice(1);  */
        return [...new Set(this.popularItemList)].splice(1) 
      }
    }
  };
</script>
<style scoped lang="stylus">
  .hot
    margin-top 10px
    .hot_header
      height 40px
      line-height 40px
      background #fff
      display flex
      justify-content space-between
      padding 0 5px 0 5px
    .hot_main
      .recommend
       background #fff
       display flex
       padding 18px
       img
        width 135px
        height 135px
      .content
        display flex
        flex-direction column
        padding-left 10px
        padding-top 18px
        .app
          border 1px solid #AE4645
          color #AE4645
          font-size 12px
          width 49px
        .desc
          font-size 12px
          color #6D6D6D
        .price
          color #AE4645
      .recList    
        display flex
        justify-content space-around
        padding-right 10px
        background #fff
        .recItem
          margin-left 10px
          img 
            width 115px
            height 115px
            background  #F4F5F7
          .text
            .itemName
              font-size 12px
            .itemPrice
              font-size 12px
              color #AE4746
              margin-left 5px

</style>
