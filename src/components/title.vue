<template>
  <div class="title" :class="`${type=='pay' ? 'pay':'finish'}`" v-if="!hide">
  </div>
</template>

<script>
  export default {
    props: ['text', 'hide','type'],
    mounted: function () {
      document.title = this.text;
    }
  }
</script>

<style lang="scss" scoped>
  .title{
    width: 300px;
    height: 68px;
    background-size: 100% 100%;
    &.pay{
      background-image: url('../assets/images/title.png');
    }
    &.finish{
      background-image: url('../assets/images/success.png');
    }
  }
</style>
