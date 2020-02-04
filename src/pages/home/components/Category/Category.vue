<!--  -->
<template>
   <div class="categories">
    <div class="category" v-for="(picturs, index) in categoryModule" :key="index">
      <img :src="picturs.titlePicUrl" alt="" />
      <div class="categoryWrapper" >
        <ul class="goodContent">
          <li class="itemWrapper" v-for="(item, index) in picturs.itemList":key="index">
            <img :src="item.listPicUrl" alt="categoryModule" />
            <div class="text">
              <span class="desc">{{ item.simpleDesc }}</span>
              <span class="price">¥{{ item.counterPrice }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div> 

 <!--  <section class="categories">
      <div class="category" v-for="pics in categoryModule">
        <img :src="pics.titlePicUrl" alt="">
        <div class="listWrapper">
          <ul class="listContent">
            <li class="listItem" v-for="item in pics.itemList">
               <img :src="item.listPicUrl" alt="categoryModule" />
            </li>
          </ul>
        </div>
      </div>
  </section> -->
</template>

<script>
  import BScroll from "better-scroll";
  export default {
    name: "Category",
    props: {
      categoryModule: Array
    },
    data() {
      return {};
    },
    mounted() {
      this.$nextTick(()=>{
         new BScroll(".categoryWrapper", {
        scrollX:true,
        click: true
      });
      })
    },
  };
</script>
<style scoped lang="stylus">
 .categories
    margin-top 10px
    .category
      img
        width 100%
    .categoryWrapper
      width 100%
      .goodContent
        display inline-flex
        background #fff
        padding 10px 0 10px 0
        .itemWrapper
          margin-left 20px
          img
            width 99px
            background #F4F4F4
        .text
          .desc
            font-size 12px
          .price
            font-size 12px
            color #A63533
</style>
