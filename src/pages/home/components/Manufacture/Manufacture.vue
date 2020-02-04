<!--  -->
<template>
  <section class="maufact">
    <div class="manu_header">
      <span>品牌制造商直供</span>
      <span
        >更多
        <van-icon name="arrow" />
      </span>
    </div>
    <ul class="manu_list">
      <li class="manu_item" v-for="(item, index) in tagList" :key="index">
        <div
          class="backImg"
          :style="{
            backgroundImage: `url(${item.webIndexVerticalPicUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }"
        >
          <span class="name">{{ item.name }}</span>
          <div class="text">
            <span class="price">{{ item.floorPrice }}</span>
            <span class="newPost">上新</span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import { Icon } from "vant";
  export default {
    name: "Manufacture",
    props: {
      tagList: Array
    },
    components: {
      [Icon.name]: Icon
    }
  };
</script>
<style scoped lang="stylus">
  .maufact
    margin-top 10px
    .manu_header
      padding 0 10px 0 10px
      height 50px
      line-height 50px
      background #fff
      display flex
      justify-content space-between
    .manu_list
      display flex
      flex-wrap wrap
      justify-content space-around
      background #fff
      padding-bottom 10px

      .manu_item
        width 180px
        height 182px
        background #F7F8FA
        margin-top 5px
        .backImg
          width 180px
          height 180px
          display flex
          flex-direction column
          align-items center
          .name
            font-size 18px
            margin-top 10px
          .text  
            display flex
            .price
             font-size 14px
             color #9A9B9B
            .newPost
              background #C8B797
              color #fff
              border-radius 3px
              font-size 14px
              display block
              width 33px
              text-align center
              margin-left 10px
            
</style>
