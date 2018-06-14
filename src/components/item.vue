<template>
  <div class="gift_item">
    <div class="img">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="name">萌新勋章(3天)</div>
  </div>
</template>

<script>
  export default {
    mounted: function () {
    }
  }
</script>

<style lang="scss" scoped>
  .gift_item{
    flex: 1;
    margin: 0 auto;
    .img{
      width: 80px;
      height: 80px;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.3);
      display: inline-block;  
      img{
        width: 50px;
        height: 50px;
        transform: translateY(15px);
      }
    }
    .name{
      // font-family: PingFangSC;
      font-size: 12px;
      letter-spacing: -0.2px;
      text-align: center;
      color: #ffffff;
      padding-top: 5px;
    }
  }
</style>
