<!--  -->
<template>
  <div class="FlashSale">
    <div class="saleHeader">
      <div class="sale">
        <span>限时购</span>
        <span class="time">{{hour &lt;10?"0"+hour :hour }}</span>
        <span>:</span>
        <span class="time">{{ min &lt;10?"0"+min:min }}</span>
        <span>:</span>
        <span class="time">{{ second &lt;10?"0"+second:second }}</span>
      </div>
      <div class="more">
        更多
        <van-icon name="arrow" />
      </div>
    </div>
    <ul class="saleList" v-if="flashSaleModule">
      <li class="saleItem" v-for="(item, index) in flashSaleModule.itemList"  :key="index">
        <img :src="item.picUrl" alt="" />
        <div class="text">
          <span class="activityPrice">¥{{ item.activityPrice }}</span>
          <span class="originPrice">¥{{ item.originPrice }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Icon } from "vant";
  export default {
    name: "FlashSale",
    props: {
      flashSaleModule: Object
    },
    data() {
      return {
        hour: 1,
        min: 59,
        second:59
      };
    },
    components: {
      [Icon.name]: Icon
    },
    methods: {
      countDown() {
        this.timer=setInterval(()=>{
          if(this.second>0){
            this.second --
          }else{
            if(this.min){
              this.second=3
              this.min --

              if(this.min<=0 && this.hour === 0){
                this.min =0
              }
            }else if(this.hour){
              this.min =3
              this.second=3
              this.hour --;
              if(this.hour <=0){
                this.hour=0
              }
            }
          }

        if (!this.hour && !this.min && !this.second) {
            clearInterval(this.timer);
          }

        },1000)
      
      }
    },
    mounted() {
     this.countDown()
    },

    beforeDestroy() {
      clearInterval(this.timer);
    }
  };
</script>
<style scoped lang="stylus">
  .FlashSale
    margin-top 10px
    .saleHeader
      height 40px
      line-height 40px
      background #ffffff
      display flex
      justify-content space-between
      padding 0 5px 0 5px
      .sale
        .time
          background black
          color #fff
          font-size 12px
          border-radius 2px
          padding 2px
          margin 5px
    .saleList
      display flex
      flex-wrap wrap
      justify-content center
      background #fff
      .saleItem
        margin 0px 8px 25px 2px
        img
          width 105px
          height 103px
          margin-bottom 5px
          background #F5F5F5
        .text
          .activityPrice
            font-size 14px
            color #A63533
          .originPrice
            text-decoration line-through
            font-size 12px
            color#777
            margin-left 5px
</style>
