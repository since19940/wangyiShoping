<!--  -->
<template>
  <header class="header">
    <slot name="header_left"></slot>
    <slot name="header_middle"></slot>
    <slot name="header_right"></slot>
  </header>
</template>

<script>
export default {
  name:'',
  data () {
    return {
    };
  },
}

</script>
<style scoped lang="stylus">
.header
  height 60px
  width 100%

 
</style>