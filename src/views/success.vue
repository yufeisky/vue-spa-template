<template>
  <div class="first_recharge">
    <c-title :text="title" :type="`finish`"></c-title>
    <i class="lzIcon-status-tick_circle success"></i>
    <div class="tip">请去背包查看萌新礼物</div>
    <div class="gift"><i class="lzIcon-status-tick_circle_fill"></i>萌新勋章已佩戴</div>
    <div class="gift"><i class="lzIcon-status-tick_circle_fill"></i>七天守护已开通</div>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  import cTitle from 'components/title';
  import item from 'components/item';
  export default {
    data () {
      return {
        title: '支付成功',
        isAgree:false,
      }
    },
    methods: {
      async getContent () {
        const response = await fetch('/api/hello');
        this.content = await response.text();
      },
      toggleProtocol(){
          let self = this;
          self.isAgree=!self.isAgree;
      }
    },
    mounted () {
      this.$store.commit('message', '欢迎使用 vue！');
      // this.getContent();
    },

    components: {cTitle,item}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    .first_recharge{
        width: 300px;
        height: 300px;
        background: url('../assets/images/first_recharge_bg.png');
        background-size: 100% 100%;
        .success{
            font-size: 80px;
            letter-spacing: -1.6px;
            text-align: center;
            color: #ffd43d;
            display:inline-block;
            padding-top: 10px;
        }
        .tip{
            font-size: 16px;
            font-weight: 500;
            letter-spacing: -0.3px;
            text-align: center;
            color: #ffffff;
        }
        .gift{
            height: 18px;
            opacity: 0.7;
            font-size: 13px;
            font-weight: 500;
            letter-spacing: -0.3px;
            text-align: center;
            color: #ffffff;
            margin-top: 13px;
            i{
                position: relative;
                top: 3px;
                left: -4px;
                font-size: 16px;
                letter-spacing: -0.3px;
                text-align: center;
                color: #10bfaf;

            }
        }
    }
</style>
