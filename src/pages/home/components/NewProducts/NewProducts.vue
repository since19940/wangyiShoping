<!--  -->
<template>
  <div class="newProdc">
    <div class="prodcHeader">
      <span>新品首发</span>
      <span>更多
        <van-icon name="arrow" />
      </span>
    </div>
    <ul class="proList">
      <li class="proItem" v-for="(item,index) in newItem" :key=index>
        <img :src="item.listPicUrl" alt="新品首发" />
        <div class="proText">
          <span class="proName">{{ item.name }}</span>
          <span class="proPrice">¥{{ item.counterPrice }}</span>
        </div>
      </li>
    </ul>
    </ul>
  </div>
</template>

<script>
  import { Icon } from "vant";
  export default {
    name: "NewProduct",
    data() {
      return {

      };
    },
    props:{
      newItemList:Array
    },
    components: {
      [Icon.name]: Icon
    },
    computed: {
      newItem(){
        return [...new Set(this.newItemList)].splice(0,6)
      }
    },
  };
</script>
<style scoped lang="stylus">
.newProdc
  margin-top 10px
  .prodcHeader
    height 60px
    line-height 60px
    display flex
    justify-content space-between
    padding 0 10px 0 10px
    background #fff
  .proList
    display flex
    justify-content space-evenly
    flex-wrap wrap
    background #fff
    .proItem
      width 103px
      height 100p
      img
        width 100%
        background #F5F5F5
      .proText
        .proName
          font-size 12px
        .proPrice
          font-size 12px
          color #A63533





</style>
