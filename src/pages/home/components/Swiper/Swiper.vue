<!--  -->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg"
          alt="实时热销top100"
        />
      </div>
      <div class="swiper-slide">
       <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>    
  </div>
</template>

<script>
  import Swiper from "swiper";
  import "swiper/css/swiper.min.css";

  export default {
    name: "",
    data() {
      return {};
    },
    methods: {
      swiper() {
        new Swiper(".swiper-container", {
          direction: 'horizontal',
          autoplay: true,
          loop: true,
          speed:500,
          pagination: {
            el: ".swiper-pagination"
          }
        });
      }
    },
    mounted() {
     this.$nextTick(()=>{
        this.swiper();
     })
    }
  };
</script>
<style scoped lang="stylus">
  .swiper-container
    width 100%
    height 200px
    background pink
    .swiper-wrapper
      .swiper-slide
        img
          width 100%
          height 100%   
        


</style>
