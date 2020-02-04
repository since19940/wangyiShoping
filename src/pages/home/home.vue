<!--  -->
<template>
  <div class="homePage">
    <Header class="homeHeader">
      <template slot="header_left">
        <div class="logo">
          <img
            src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
            alt=""
          />
        </div>
      </template>

      <template slot="header_middle">
        <input type="text" class="header_input" placeholder="搜索商品" />
      </template>

      <template slot="header_right">
        <button class="header_btn">登录</button>
      </template>
    </Header>
    <van-tabs v-model="active">
      <van-tab title="推荐"></van-tab>
      <van-tab title="居家生活"></van-tab>
      <van-tab title="服饰鞋包"></van-tab>
      <van-tab title="美食酒水"></van-tab>
    </van-tabs>
    <div class="homeWrapper">
      <div class="homeContent">
        <Swiper></Swiper>
        <div class="service">
          <div
            class="serviceItem"
            v-for="(item, index) in homeData.policyDescList"
            :key="index"
          >
            <img :src="item.icon" :alt="item.desc" />
            <span>{{ item.desc }}</span>
          </div>
        </div>
        <NavBar></NavBar>
        <Benefits
          :indexActivityModule="homeData.indexActivityModule"
        ></Benefits>
        <Manufacture :tagList="homeData.tagList"></Manufacture>
        <HotSell
          :categoryHotSellModule="homeData.categoryHotSellModule"
        ></HotSell>
        <Recommend :popularItemList="homeData.popularItemList"></Recommend>
        <FlashSale :flashSaleModule="homeData.flashSaleModule"></FlashSale>
        <NewProduct :newItemList="homeData.newItemList"></NewProduct>
        <Category :categoryModule="homeData.categoryModule"></Category>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../../components/Header/Header";
  import Swiper from "./components/Swiper/Swiper";
  import NavBar from "./components/NavBar/NavBar";
  import Benefits from "./components/Benefits/Benefits";
  import Recommend from "./components/Recommend/Recommend";
  import FlashSale from "./components/FlashSale/FlashSale";
  import NewProduct from "./components/NewProducts/NewProducts";
  import Category from "./components/Category/Category";
  import HotSell from "./components/HotSell/HotSell";
  import Manufacture from "./components/Manufacture/Manufacture";

  import BScroll from "better-scroll";
  import { Tab, Tabs } from "vant";
  import { mapState, mapActions } from "vuex";

  export default {
    name: "home",
    data() {
      return {
        //homeData: []
      };
    },
    components: {
      Header,
      Swiper,
      NavBar,
      Benefits,
      Recommend,
      FlashSale,
      NewProduct,
      Category,
      HotSell,
      Manufacture,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
    },
    computed: {
      ...mapState(["homeData"])
    },
    methods: {
      ...mapActions(["getHomeInfo"])
    },

    async mounted() {
      /* const homeData = await this.$http.reqHomeData();
      this.homeData = homeData.data.policyDescList;
      console.log(homeData); */
      this.getHomeInfo();

      new BScroll(".homeWrapper", {
        scrollY: true,
        click: true
      });
    }
  };
</script>
<style scoped lang="stylus">
  .homePage
    .homeHeader
      display flex
      justify-content space-around
      align-items center
      background #fff
      position relative
      z-index 2
      .logo
        padding-left 5px
        img
          width 70px
      .header_input
        background #E5E5E5
        width 230px
        height 30px
        border-radius 5px
        padding-left 15px
      .header_btn
        width 48px
        height 30px
        border-radius 5px
        border 1px solid #A63533
        background #fff
    .homeWrapper
      width 100%
      height 557px
      .homeContent
        background #F4F5F7
        .service
          width 100%
          height 40px
          display flex
          justify-content space-around
          align-items center
          .serviceItem
            display flex
            img
              width 16px
              height 16px
            span
              font-size 13px
</style>
