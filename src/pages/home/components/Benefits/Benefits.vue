<!--  
<template>
  <div class="benefits">
    <div class="benefits_head">-新人专享-</div>
    <div class="benefits_main">
      <div class="left" >
        <div class="top"></div>
        <div class="down">
          <img src="" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="up"></div>
        <div class="down"></div>
      </div>
    </div>
  </div>
</template>
-->

<!--  要的
<template>
  <div class="benefits">
    <div class="benefits_head">-新人专享-</div>
    <div class="benefits_main">
      <div class="left" >
        <div class="top">新人专享礼包</div>
        <div class="down">
          <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="up">
           <div class="title">
            <span class="benif">福利社</span>
            <span class="special">今日特价</span>
          </div>
          <img src="http://yanxuan.nosdn.127.net/126b4b638d2759c342ca4b82e420ef86.png" alt="">
        </div>
       <div class="down">
           <div class="title">
            <span class="benif">新人拼团</span>
            <span class="special">1元起包邮</span>
          </div>
          <img src="http://yanxuan.nosdn.127.net/feadf4391df7417c622c470b1e251ca7.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

-->

<template>
  <div class="benefits">
    <div class="benefits_head">-新人专享-</div>
    <div class="benefits_main">
      <div class="left" v-if="indexActivityModule" >
        <div class="top" >{{indexActivityModule[0].subTitle}}</div>
        <div class="down">
         <a :href="indexActivityModule[0].targetUrl">
            <img :src="indexActivityModule[0].picUrl"/>
         </a>
        </div>
      </div>
      <div class="right">
        <div class="up" v-for="(item,index) in getRestOfItem" :key=index> 
           <div class="title">
            <span class="benif">{{item.title}}</span>
            <span class="special">{{item.subTitle}}</span>
          </div>
          <a :href="item.targetUrl">
            <img :src="item.picUrl">
          </a>
        </div>
    </div>
  </div>
  </div> 
</template>
<script>

export default {
  name:'',
  data () {
    return {
  
    };
  },
  props:{
    indexActivityModule:Array,
  },
  computed: {
     getRestOfItem(){
     /*  return [...this.indexActivityModule].splice(1,3)  */
      return [...new Set(this.indexActivityModule)].splice(1,3) 
      
    } 
  },

methods: {
  
},

}

</script>

<style scoped lang="stylus">
  .benefits
    width 100%
    background pink
    .benefits_head
      height 45px
      line-height 45px
      text-align center
      background #fff
    .benefits_main
      height 200px
      background #fff
      display flex
      padding 0 15px 15px 15px
      .left
        width 50%
        background #F7E9D2
        margin 1px
        display flex
        flex-direction column
        justify-content center
        align-items center 
        padding 15px
        .top
          text-align center
        .down
          img 
            width 125px
            height 125px  
      .right
        width 50%
        background #ffffff
        margin 1px
        display flex
        flex-direction column
        justify-content center
        align-items center
        .up
          display flex
          background #F7E3D5
          width 100%
          height 120px
          margin-bottom 1px
          .title
            width 70px
            display flex
            flex-direction column
            padding-top 10px
            .benif
              font-size 16px
              font-weight 400
              text-align center
            .special
              font-size 12px
              color #7D7C7B
              text-align center 
          img 
            width 100px



</style>